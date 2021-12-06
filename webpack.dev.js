const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/client/index.js",
    output: {
        clean: true, //clean the dist folder before output
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        libraryTarget: "var",
        library: "Client"

    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        watchFiles: ["src/**"]

    },
    module: {
        rules: [
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                loader: "babel-loader"

            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]

            }

        ]

    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"

        })

    ]
}