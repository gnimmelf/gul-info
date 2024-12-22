# Gul Info

A very lean `SolidJs` app compiled to a custom-element using
- `esbuild`
- `postcss-js`
- `shoelace-style`.

Postcss is used *runtime* to:

1. Render css in a style-tag in the shadow-dom to minimize external dependencies.

2. Have nested-rules expanded.


# Build assets

## Index.html

- indexPage: `.build-assets/index.html` * - Must reference the `/dist/main.js`

## TLS files

- pemKey: `.dev-certs/server.key`
- pemCert: `.dev-certs/server.cert`

**How-to:**

1. Create the CA's private key and self-signed certificate:

    - `openssl req -nodes -new -x509 -keyout ca.key -out ca.pem -days 365 -subj "/CN=MyCA"`

2. Create the server's private key and a Certificate Signing Request (CSR):

    - `openssl req -nodes -new -keyout server.key -out server.csr -subj "/CN=localhost"`

3. Use the CA to sign the server's CSR and generate the server certificate:

    - `openssl x509 -req -in server.csr -CA ca.pem -CAkey ca.key -CAcreateserial -out server.cert -days 365`

4. Move files to folder `.dev-certs`.

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