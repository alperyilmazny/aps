import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    /*debug: true,*/
    mode: 'none',
    devtool: 'inline-source-map',
    /*noInfo: false,*/
    entry: [
        path.resolve(__dirname, 'public/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader"}},
            {test: /\.css$/, use: [{ loader: "style-loader"}, {loader:"css-loader"}]}
        ]
    }
}