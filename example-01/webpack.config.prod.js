var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'source-map',
	entry: ['./src/index'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor : {
        warnings: false
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV' : JSON.stringify('production')
    })
  ],
	 module: {
	   loaders: [
       {test: /\.css$/, loader: 'style!css'},
       {test: /\.styl$/, loader: 'style!css!stylus'},
       {test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src')},
     ]
	 }
}
