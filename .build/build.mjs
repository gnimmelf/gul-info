import fs from 'node:fs';
import https from 'node:https';
import http from 'node:http';
import path from 'node:path';
import * as esbuild from 'esbuild'
import { solidPlugin } from 'esbuild-plugin-solid';
import { lookup as mimeLookup } from 'mime-types';

import { isPortFree } from './is-port-free.mjs'

const PRODUCTION = false

const DIST_DIR = 'dist'
const METAFILE = `${DIST_DIR}/metafile.json`

const ASSET_PATHS = {
    // Relative to package.json
    indexPage: '.build/index.html',
}

export const TLS_ASSET_PATHS = {
    // Relative to package.json
    pemKey: '.dev-certs/server.key',
    pemCert: '.dev-certs/server.cert',
}

const logPlugin = () => ({
    name: 'logPlugin',
    setup(build) {
        build.onEnd(async (result) => {
            console.log(`build ended with ${result.errors.length} errors`)
            if (PRODUCTION) {
                fs.writeFileSync(METAFILE, JSON.stringify(result.metafile))
            }
        })
    },
})

const checkAssetPaths = (assetPaths) => {
    const missingAssets = Object.entries(assetPaths)
        .filter(([_key, assetPath]) => !fs.existsSync(assetPath))
        .map(([key]) => key)

    if (missingAssets.length) {
        console.log(`Missing assets: ${missingAssets.join(', ')}`, assetPaths)
        process.exit(1)
    }
    else {
        console.log('All assets found', assetPaths)
    }
}

const startEsbuild = async () => {
    // Setup esbuild
    let ctx = await esbuild.context({
        entryPoints: ['src/solid-js/index.ts'],
        bundle: true,
        sourcemap: true,
        metafile: PRODUCTION,
        minify: true,
        outfile: `${DIST_DIR}/app.js`,
        // minify: true,
        plugins: [solidPlugin(), logPlugin()],
    })
    await ctx.watch()
    // Start esbuild serve for `cwd` on a random local port
    const esServerProps = await ctx.serve({
        servedir: '.'
    })
    return esServerProps
}

const createRequestHandler = ({ host, port }) => (req, res) => {
    if (/^\/(\?|$)/.test(req.url)) {
        const filePath = ASSET_PATHS.indexPage
        // Check if the file exists
        fs.stat(filePath, (err, stats) => {
            if (err || !stats.isFile()) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return;
            }
            // Determine content type
            const contentType = mimeLookup(filePath) || 'application/octet-stream';
            // Serve the file
            res.writeHead(200, { 'Content-Type': contentType });
            const stream = fs.createReadStream(filePath);
            stream.pipe(res);
        });
    }
    else {
        // Forward the incoming request to esbuild serve
        const proxyReq = http.request({
            hostname: host,
            port: port,
            path: path.join(req.url),
            method: req.method,
            headers: req.headers,
        }, (proxyRes) => {
            if (proxyRes.statusCode === 404) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return
            }

            // Forward the response from esbuild to the client
            res.writeHead(proxyRes.statusCode, proxyRes.headers)
            proxyRes.pipe(res, { end: true })
        })
        proxyReq.on('error', (e) => {
            console.error(e);
        });
        // Forward the original request to esbuild serve, and pipe the response back
        req.pipe(proxyReq, { end: true })
    }
}


const main = async () => {
    const useTls = process.argv.includes('--useTls');

    const assetPaths = useTls
        ? { ...ASSET_PATHS, ...TLS_ASSET_PATHS }
        : { ...ASSET_PATHS }

    checkAssetPaths(assetPaths)

    let port = 3000;
    let free
    do {
        free = await isPortFree(port)
        if (!free) { port++ }
    } while (!free)

    const esServerProps = await startEsbuild()

    const requestHandler = createRequestHandler(esServerProps)
    const server = useTls
        ? https.createServer({
            key: fs.readFileSync(assetPaths.pemKey),
            cert: fs.readFileSync(assetPaths.pemCert),
        }, requestHandler)
        : http.createServer(requestHandler)

    server.listen(port, () => {
        console.log(`Dev server running at ${useTls ? 'https' : 'http'}://localhost:${port}`);
        console.log(`(Esbuild serve running at ${useTls ? 'https' : 'http'}://localhost:${esServerProps.port})`);
        if (PRODUCTION) {
            console.log(`Metafile: ${METAFILE} => https://esbuild.github.io/analyze/`)
        }
    })
}

main({ useTls: false })
