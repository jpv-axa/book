const packageJSON = require('./package.json')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
	entry: {
		bundle: './index-build.js', // auto-discover the files from dg/components
		fonts: './dg/components/materials/fonts.scss' // this file has 2 problems : enormous and not usable as is because of font patents
	},
	output: {
		path: path.resolve(__dirname, packageJSON.config.dist),
		filename: './[name].' + packageJSON.version + '.js'
	},
	plugins: [
		new FixStyleOnlyEntriesPlugin(), // while waiting for Webpack@5, removes the useless fonts.js file
		new CleanWebpackPlugin(), // cleans the dist/* directory before build
		new MiniCssExtractPlugin({
			filename: '[name].' + packageJSON.version + '.css'
		}),
		new HtmlWebpackPlugin({
			filename: 'demo.html',
			template: '!!html-loader!build-demo.html', // pass our template to html-loader
			inject: 'body', // we put JS at the bottom or Web Components dont render correctly
			minify: false // still have readable HTML
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				loaders: [
					{
						loader: MiniCssExtractPlugin.loader //'style-loader',
						//options: {}
					},
					{
						loader: 'css-loader',
						options: {}
					},
					{
						loader: 'resolve-url-loader', // rewrite correctly the url() found by sass
						options: {}
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: [path.resolve(__dirname, '../')],
							sourceMapContents: false
						}
					}
				],
				include: path.resolve(__dirname, '../')
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [
					{
						loader: 'babel-loader',
						options: require('./.storybook/.babelrc.js')
					}
				],
				include: path.resolve(__dirname, '../')
			},
			{
				test: /\.(svg|jpe?g|woff2?)$/,
				use: [
					{
						loader: 'file-loader',
						options: { name: '[name].' + packageJSON.version + '.[ext]' }
					}
				]
			}
		]
	},
	mode: 'production'
}
