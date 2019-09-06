const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	mode: isProd ? 'production' : 'development',
	devtool: isProd ? false : 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: 'NovaPoshta',
		libraryTarget: 'umd',
	},
	externals: {
		fetch: 'fetch',
	},
	optimization: {
		noEmitOnErrors: isProd,
		minimize: isProd,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				exclude: /node_modules|__tests__|dist/,
				use: [
					{
						loader: 'eslint-loader',
						options: {
							failOnWarning: false,
							failOnError: true,
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets: [
							['@babel/preset-env', { targets: { browsers: ['last 2 versions', 'safari >= 7'] } }],
						],
					},
				},
			},
		],
	},
};
