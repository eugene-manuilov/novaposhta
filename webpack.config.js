const path = require('path');
const webpack = require('webpack');

const config = {};

config.mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

// entry and context
config.context = path.resolve(__dirname, 'src');
config.entry = './NovaPoshta.js';

// output
config.output = {
	library: 'NovaPoshta',
	libraryTarget: 'umd',
};

// define externals
config.externals = {
	fetch: 'fetch',
};

// define module and plugins
config.module = { rules: [] };
config.plugins = [];

// eslint configuration
config.module.rules.push({
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
});

// babel loader rule
config.module.rules.push({
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
});

// no emit plugin
config.plugins.push(new webpack.NoEmitOnErrorsPlugin());

module.exports = config;
