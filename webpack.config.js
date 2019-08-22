const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    "mode":"development",
    entry:path.join(__dirname,'./main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.vue$/,use:['vue-loader']},
            {test:/\.(PNG|png|jpg)$/,use:['url-loader']},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
}