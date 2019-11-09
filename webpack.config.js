const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'index.js'
	},
	mode: 'development',
	watch: true,
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(jpeg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				test: /\.scss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devServer: {
		port: 3000,
		publicPath: '/assets/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	]
}
