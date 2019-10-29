const HtmlWebPackPlugin = require("html-webpack-plugin");
//const path = require('path');
module.exports = {
    mode:"development",
    context: __dirname,
    // entry: {
    //     index: './src/index.jsx',
    // },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: '[name].js',
    // },
    resolve: {
        extensions: [".js", ".jsx"]
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"   //E6-E5
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",  //webpack template path
            filename: "./index.html"       //The file to write the HTML to
        })
    ]
}