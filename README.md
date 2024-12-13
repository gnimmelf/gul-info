# Gul Info

A very lean SolidJs app compiled to a custom-element using `esbuild` and `postcss-js`.

Postcss is used *runtime* to

1. render css in a style-tag in the shadow-dom to minimize external dependencies.

2. Have nested-rules expanded.

# Dev & build

Buildt using a custom `esbuild` script. Outputs to `dist` folder.

## Build assets

*`.build-assets/index.html`* - Must reference the `/dist/main.js`

Pem files one-liner:

```
openssl req -nodes -new -x509 -keyout server.key -out server.cert -days 365 -subj "/CN=localhost"
```

Move files to `.build-assets/`-folder.