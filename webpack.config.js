var path = require('path');
var webpack = require('webpack')
var ROOT = path.resolve(__dirname, 'src/main/webapp');
var SRC = path.resolve(ROOT, 'public');
var DEST = path.resolve(__dirname, 'src/main/webapp/dist');
 
var presets = ['es2015', 'react', 'stage-2'];
module.exports = {
  devtool: 'source-map',
  entry: {
    app: SRC + '/main.js',
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  output: {
    path: DEST,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,  
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: presets },
        include: SRC
      },
 
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=image/svg+xml'}
    ]
  }
};
