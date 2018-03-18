import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import globals from "rollup-plugin-node-globals";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: {
    file: "public/bundle.js",
    format: "iife",
    sourcemap: true
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    json(),
    babel({
      babelrc: false,
      presets: [
        [
          "env",
          {
            targets: {
              browsers: ["last 2 versions"]
            },
            modules: false
          }
        ],
        "stage-0"
      ],
      plugins: [["transform-react-jsx", { pragma: "h" }]]
    }),
    commonjs(),
    globals(),
    production && uglify()
  ]
};
