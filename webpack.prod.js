const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const terserPlugin = require("terser-webpack-plugin")

module.exports = {
    entry: "./src/client/index.js",
    output: {
        clean: true, //clean the dist folder before output
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        libraryTarget: "var",
        library: "Client"

    },
    optimization: {
        minimizer: [new terserPlugin({}), new cssMinimizerWebpackPlugin({})],
        },
    mode: "production",
    module: {
        rules: [
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                loader: "babel-loader"

            },
            {
                test: /\.scss$/,
                use: [ miniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]

            },
            {
                test: /\.png$/,
                type: "asset/resource"
            }

        ]

    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"

        }),
        new miniCssExtractPlugin({ filename: "[name].css" })

    ]
}