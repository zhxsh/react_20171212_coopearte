const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: [
	    'webpack-dev-server/client?http://0.0.0.0:3333', 'webpack/hot/only-dev-server', './app/index.js'
	 ],
	output: {
		path: path.resolve(__dirname,'./public'),
		filename: 'bundle.js'
	},
	devServer: {
	    contentBase: './dist',
	    hot: true,
	    open: true
	},
	plugins: [
	    new HtmlWebpackPlugin({template: './index.tpl.html'}),
	    new webpack.HotModuleReplacementPlugin()
	 ],
	module: {
		loaders: [
			{ 
				test: /\.js|jsx/, 
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015']
				}
			},
			{ 
				test: /\.css/,
				loader: ['style-loader','css-loader']
			},
			{ 
				test: /\.(png|jpg|gif)$/, 
				loader: 'file-loader?name=./images/[name].[ext]',
				options:{ 
					publicPath: '/'
				}
			}
		]
	}
}