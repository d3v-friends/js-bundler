const { build } = require("esbuild");

Promise.resolve()
    .then(() =>
        build({
            tsconfig: "./tsconfig.mjs.json",
            entryPoints: ["./src/index.ts"],
            bundle: true,
            minify: true,
            platform: "node",
            format: "esm",
            outfile: "dist/index.mjs",
        }),
    )
    .then(() =>
        build({
            tsconfig: "./tsconfig.cjs.json",
            entryPoints: ["./src/index.ts"],
            bundle: true,
            minify: true,
            platform: "node",
            format: "cjs",
            outfile: "dist/index.cjs",
        }),
    )
    .catch(reason => console.log(reason));
