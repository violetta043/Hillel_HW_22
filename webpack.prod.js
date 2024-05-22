const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports =  {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true, 
                quality: 70
              }
            }
          }
        ],
      },
    ],
  },

  
  
  plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin(), 
    
  ],
};
