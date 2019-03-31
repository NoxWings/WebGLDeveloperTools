import pkg from "./package.json";

export default {
    input: "src/debug/webgl-debug.js",
    output: [
        {
            file: pkg.main,
            format: "umd",
            name: pkg.name
        },
        {
            file: pkg.module,
            format: "es"
        }
    ]
};
