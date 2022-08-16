const path = require('path');

module.exports = {
    entry: "./src/index.ts",//指定入口文件
    // 指定打包文件的目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-load',
                exclude: /node_modules/
            }
        ]
    }
}