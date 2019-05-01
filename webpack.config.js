const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '.', 'src', 'main.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, '.', 'src'),
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};
