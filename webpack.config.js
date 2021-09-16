const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "production",
    entry: {
        main: "./src/index.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader", {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader", {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }, {
            test: /\.(png|jpg|jpeg|svg|gif)$/,
            type: "asset/resource",
            generator: {
                filename: "img/[name][ext][query]"
            }
        }, {
            test: /\.(woff(2)?|ttf|eot)$/,
            type: "asset/resource",
            generator: {
                filename: "font/[name][ext][query]"
            }
        }, {
            test: /\.html$/,
            use: {
                loader: "html-loader"
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html",
            minify: "index.html",
            minify: false
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    }
}