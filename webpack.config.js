var webpack = require('webpack')
var path = require('path')
var HTMLWebpackPlugin = require('html-webpack-plugin')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: [__dirname + '/src/main.js', 'webpack-hot-middleware/client?reload=true'],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
        test: /\.json$/,
        loader: 'json'
      },
      {
        // match javascript files
        test: /\.js$/,
        // exclude node_modules -> .js
        exclude: '/node_modules',
        // use babel-loader
        loader: 'babel',
        // or you can set this config in .babelrc
        // query: { presets: ['es2015'] }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.join(__dirname, './src'),
      'components': path.join(__dirname, './src/components'),
      'assets': path.join(__dirname, './src/assets'),
      'services': path.join(__dirname, './src/services')
    }
  },
  plugins: [
      new webpack.BannerPlugin('Copyright @ 2016 bushuai'),
      new HTMLWebpackPlugin({ filename: 'index.html', template: __dirname + '/index.tmpl.html', inject: true }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
      // ,new ExtractTextWebpackPlugin('[name]-[hash].css')
    ]
    // ,devServer: {
    //   hot: true,
    //   // default: 8080
    //   port: 8888,
    //   // refresh page instantly
    //   inline: true,
    //   // output info with color
    //   colors: true,
    //   // the root dir path
    //   // contentBase: './public',
    //   historyApiFallback: true
    // }
}