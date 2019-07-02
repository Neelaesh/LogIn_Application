const HTMLWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');

var config = {
    iconPath: 'node_modules/react-icons'
};

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : __dirname + '/dist'
    },
    mode: 'development',
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test : /\.css$/,
                use : ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template : './index.html'
        }),
        new OpenBrowserWebpackPlugin({
            url : 'http://localhost:3003'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer : {
        contentBase: __dirname + "/dist/",
        inline :true,
        port : 3003
    }
}