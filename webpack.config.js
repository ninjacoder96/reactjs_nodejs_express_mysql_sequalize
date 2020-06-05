const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
//    devServer: {
//       inline: true,
//       port: 8081
//    },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env']
            }
         },
         { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
         }
      ], 
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}