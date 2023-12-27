import {spawnSync} from "child_process";

const [entrypoint, tsconfig, dts] = process.argv;


console.log(JSON.stringify(
    spawnSync("tsc", [
        "-p", tsconfig,
        "--inlineSourceMap", "true",
        entrypoint
    ]).stdout
));

console.log(JSON.stringify(
    spawnSync("dts-bundle-generator", [
        "--external-inlines", "true",
        "--sort", "true",
        "--no-banner", "true",
        "--out-file", dts,
        "--project", tsconfig,
        entrypoint
    ]).stdout
))
