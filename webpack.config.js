import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/bts.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/bts.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader",]
            },
        ],
    },
};