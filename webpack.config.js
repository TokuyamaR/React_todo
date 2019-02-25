// webpack(モジュールを束ねるツール)に関する設定ファイル
// webpackとは：https://goworkship.com/magazine/how-to-webpack/
// webpack.config.jsに関する設定方法：https://original-game.com/how-to-use-webpack-config-js/

const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/js/app.js'), // プログラムの実行を開始するファイル
    output: { // 出力先ファイルの設定
        path: path.join(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [ // 現在はloadersプロパティは使えないので注意
            {
                test: /\.js$/, //変換対象ファイルの設定
                exclude: /node_modules/, // 対象外とするファイルの設定
                loader: 'babel-loader', // loaderの設定
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx']
    }
};