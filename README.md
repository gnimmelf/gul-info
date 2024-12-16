# Gul Info

A very lean SolidJs app compiled to a custom-element using `esbuild`, `postcss-js` and `shoelace-style`.

Postcss is used *runtime* to:

1. Render css in a style-tag in the shadow-dom to minimize external dependencies.

2. Have nested-rules expanded.

# Dev & build

Built using custom `esbuild` script `.build`. Outputs to `dist` folder.

- Always watch mode!

## Build assets

*`.build-assets/index.html`* - Must reference `/dist/main.js`

Pem files one-liner:

```
openssl req -nodes -new -x509 -keyout server.key -out server.cert -days 365 -subj "/CN=localhost"
```

Move files to `.build-assets/`-folder.

# TODO

## Build

- [ ] Build without watch-mode

- [ ] Minify Css

- [ ] Minify Js

## App

- [ ] Admin backend w/ login

- [ ] SMS / Payment option to verify clients