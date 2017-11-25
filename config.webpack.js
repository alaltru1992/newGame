const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let buildConfig = {
    devtool: "source-map",
    entry: {
        'index': [path.resolve(__dirname, './src/dist.js')]
    },
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: '[name].js'
    },
    module: {
        loaders:[
            { test: /\.js$/, /*exclude: /node_modules/,*/ loader: "babel-loader" }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([

            // Copy directory contents to {output}/to/directory/
            { from: './res', to: './res' },

        ], {
            ignore: [
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    ],
    watch: true
};
module.exports = buildConfig;
