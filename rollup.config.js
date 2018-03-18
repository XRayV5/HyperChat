import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: {
    file: "public/bundle.js",
    format: "iife",
    sourcemap: true
  },
  plugins: [
    babel({
      babelrc: false,
      presets: ["es2015-rollup"],
      plugins: [["transform-react-jsx", { pragma: "h" }]]
    }),
    resolve({
      jsnext: true
    }),
    commonjs(),
    production && uglify()
  ]
};
