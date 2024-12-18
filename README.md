# Gul Info

A very lean SolidJs app compiled to a custom-element using `esbuild`, `postcss-js` and `shoelace-style`.

Postcss is used *runtime* to:

1. Render css in a style-tag in the shadow-dom to minimize external dependencies.

2. Have nested-rules expanded.

# Build assets

## Index.html

`.build-assets/index.html`* - Must reference the `/dist/main.js`

## TLS (Transport Layer Security) files

`openssl req -nodes -new -x509 -keyout server.key -out server.cert -days 365 -subj "/CN=localhost"`

Move files `server.key`, `server.cert` to `.build-assets/`-folder.

# Dev & build

Built using custom `esbuild` script `.build`. Outputs to `dist` folder.

- Always watch mode!

**SurrealDB** - Start local dev-server using TLS files:

`package.json`:`scripts`:`start-db`

OR

`surreal start --user r00t --pass r00t surrealkv://.dev-data -A --bind 127.0.0.1:8001 --web-crt .build-assets/server.cert --web-key .build-assets/server.key`

**Web-server** - Start local dev-server using TLS files:

`package.json`:`scripts`:`dev`

OR

`node .build.mjs`




# TODO

## Build

- [ ] Production build script

    - [ ] Minify Css

        - Why? - Since this is an extra runtime-step performed at the client

    - [ ] Minify Js - Buildtime, so OK

## App

- [ ] Admin backend w/ login

- [ ] SMS / Payment option to verify clients