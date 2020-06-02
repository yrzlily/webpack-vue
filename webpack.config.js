const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
      },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    resolve:{
        alias: {
            // 配置别名'vue$'
            'vue$': 'vue/dist/vue.esm.js',
            // 这个为src配置别名
            '@': path.resolve(__dirname, '../src')
        },
        // 省略拓展名
        extensions: ['*', '.js', '.json', '.vue'],
    }
}

module.exports = config