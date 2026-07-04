await Bun.build({
  entrypoints: ['./src/js/app.js'],
  outdir: "dist/js"
});

await Bun.build({
  entrypoints: [
    './node_modules/normalize.css/normalize.css',
    './node_modules/sakura.css/css/sakura.css',
    './src/css/main.css',
  ],
  outdir: "dist/css",
  naming: "[name].[ext]"
});
