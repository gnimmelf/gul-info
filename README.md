# Gul Info

*Work in progress!*

A very lean `SolidJs` app compiled to a custom-element using:
- `esbuild`
- `postcss-js`
- `shoelace-style`

Postcss is used *runtime* to:

1. Render css in a style-tag in the shadow-dom to minimize external dependencies.

2. Have nested-rules expanded.

## BaaS - SurrealDb

Trying out SurrealDb v2 as a Backend-as-a-Service.

### Auth0 integration

- https://surrealdb.com/docs/tutorials/integrate-auth0-as-authentication-provider

Create an Auth0 **Application**

Must match this `ConfigService::auth0`:

```js
{
    "domain": '<YOUR_DOMAIN>.eu.auth0.com',
    "clientId": '<GENERATED>',
    "authorizationParams": {
        audience: 'https://surrealdb.com/',
        redirect_uri: window.location.origin
    },
}
```

Create an Auth0 **Api** "surrealdb-<YOUR_DOMAIN>"

- Api Identifier *is* `audience`: `https://surrealdb.com/`

- JWT Profile: `Auth0`

- JWT Algorith: `RS256`

Create an Auth0 **Action** "SurrealDbPostLogin".

NOTE!! For som reason the **Action** example doesn't work. The action will not trigger with this guard:

```js
if (event.authorization) { /*...*/ }
```

For now delete the above mentioned guard. -Will propbably cause problems later...

---

NOTE! Maybe try [Clerk](https://clerk.com/)

# Build assets

## Index.html

- indexPage: `.build-assets/index.html` * - Must reference the `/dist/main.js`

## TLS cert files

- pemKey: `.dev-certs/server.key`
- pemCert: `.dev-certs/server.cert`

**NOTE!** Since we will be running on a self-signed certificate, you need to allow insecure origins for localhost. If the app doesn't load, check the `/version` request to SurrealDB.

Options:

1. Open SurrealdD `https://127.0.0.1:7999/version` in a browser tab (in same browser as you use for the app), and proceed through the warning to load the page content.

2. Set chrome://flags/ for allowing insecure `https://127.0.0.1` ports 7999 (SurrealDb), 8000 (dev server) and (maybe) 8001 (live-realod).

3. Add the certificate to the system's trusted root certificate store. Check online for how-to.

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

- Build to prod using flag `--prod`.

**SurrealDB** - Start local dev-server using TLS files:

`package.json`:`scripts`:`start-db-tls`

OR

`surreal start --user r00t --pass r00t surrealkv://.dev-data -A --bind 127.0.0.1:8001 --web-crt .build-assets/server.cert --web-key .build-assets/server.key`

**Web-server** - Start local dev-server using TLS files:

`package.json`:`scripts`:`dev-tls`

OR

`node .build.mjs`


# TODO

## Build

- [x] Production build script

    - [ ] Minify Css

        - Why? - Since this is an extra runtime-step performed at the client

    - [x] Minify Js - Buildtime, so OK

## App

- [x] Admin backend w/ login

- [ ] SMS / Payment option to verify clients?