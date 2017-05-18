const path = require('path')

const config  = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
    publicPath: 'assets'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ["latest", "stage-0", "react"]
        }
			}
		]
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
  }
};

module.exports = config;
