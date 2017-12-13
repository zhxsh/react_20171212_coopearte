const path = require('path');

module.exports = {
	entry: {
		name: './app/index.js'
	},
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: 'bundle.js'
	},
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