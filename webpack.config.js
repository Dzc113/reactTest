const path = require('path')
//导入在内存自动生成的index页面插件
const HtmlWebPackPlugin = require('html-webpack-plugin')  

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'),    //源文件
    filename : 'index.html'
})
module.exports = {
    mode: 'development',   //development  production
    plugins: [
        htmlPlugin
    ],
    module : {
        rules : [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react',
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                        ]
                    }
            }
        }
        ]
    }
}
