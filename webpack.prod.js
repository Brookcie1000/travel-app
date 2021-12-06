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
    mode: "production",
    module: {
        rules: [
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                loader: "babel-loader"

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