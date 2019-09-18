const path = require("path");

module.exports = {
	entry: "./index.js",
	mode: "development",
	optimization: {
		minimize: false
	},
	devtool: 'cheap-module-source-map',
	performance: {
		hints: false
	},
	output: {
		path: __dirname + "/dist",
		publicPath: "dist",
		filename: "worker.js"
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			type: "javascript/auto",
			use: {
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-react"]
				}
			}
		}]
	}
};