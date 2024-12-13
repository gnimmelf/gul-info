import fs from 'node:fs';
import https from 'node:https';
import http from 'node:http';
import path from 'node:path';
import * as esbuild from 'esbuild'
import { solidPlugin } from 'esbuild-plugin-solid';
import { lookup as mimeLookup } from 'mime-types';

import { isPortFree } from './.build-assets/is-port-free.mjs'

const assetPaths = {
    pemKey: '.build-assets/server.key',
    pemCert: '.build-assets/server.cert',
    indexPage: '.build-assets/index.html',
}

const checkAssetPaths = () => {
    const missingAssets = Object.entries(assetPaths)
        .filter(([key, assetPath]) => !fs.existsSync(assetPath))
        .map(([ key ]) => key)

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
        entryPoints: ['src/main.ts'],
        bundle: true,
        outfile: 'dist/app.js',
        plugins: [solidPlugin()],
    })
    await ctx.watch()
    // Start esbuild serve for `cwd` on a random local port
    const esServerProps = await ctx.serve({
        servedir: '.'
    })
    return esServerProps
}

const createProxyServer = ({ host, port }) => {
    // Set up a HTTPS server on port 3000 that proxies esbuild serve
    const server = https.createServer({
        key: fs.readFileSync(assetPaths.pemKey),
        cert: fs.readFileSync(assetPaths.pemCert),
    }, (req, res) => {

        if (req.url === '/') {
            const filePath = assetPaths.indexPage
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
    })
    return server
}

const main = async () => {
    checkAssetPaths()

    let port = 3000;
    let free
    do {
        free = await isPortFree(port)
        if (!free) { port++ }
    } while (!free)

    const esServerProps = await startEsbuild()
    const server = createProxyServer(esServerProps)

    server.listen(port, () => {
        console.log(`Dev server running at https://localhost:${port}`);
        console.log(`(Esbuild serve running at https://localhost:${esServerProps.port})`);
    })
}

main()
