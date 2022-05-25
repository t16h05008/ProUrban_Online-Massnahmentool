const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        tool:  './js/tool.js',
        // actions: './data/actions.js',
        // actors: './data/actors.js',
        // areas: './data/areas.js',
        // themes: './data/themes.js',
        styles: './css/styles.css'
    },
    mode: 'production', // do the optimizations manually because files in the data directory would create empty files in production mode
    module: {
        rules: [
            {
            test: /.s?css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            minify: TerserPlugin.uglifyJsMinify,
            terserOptions: { //`terserOptions` options will be passed to `uglify-js`
                compress: {
                    dead_code: true,
                    drop_console: true,
                    unused: false
                  },
                  mangle: {
                    reserved: ['actions', 'areas', 'actors', 'themes'] // don't mangle these since we reference them across files
                  }
            }, 
          }),
          `...`, // extend to existing minimizers
          new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: "styles.css"
            }
        )
    ],
    output: {
      path: `${__dirname}/dist`,
      filename: '[name].js',
    },
  };