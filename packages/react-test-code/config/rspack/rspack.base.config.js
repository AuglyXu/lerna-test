const path = require('path');
const paths = require('./utils/paths');
const NodePolyfill = require('@rspack/plugin-node-polyfill');
/**
 * COMMON RSPACK CONFIGURATION
 */
module.exports = (options) => ({
	mode: options.mode,
	context: __dirname,
	devtool: options.devtool,
	/** 入口 */
	entry: options.entry,
	/** 出口 */
	output: {
		path: path.resolve(process.cwd(), 'build'),
		publicPath: paths.publicPath,
		...options.output,
	},
	/** 打包优化 */
	optimization: options.optimization,
	/** 模块解析 */
	module: {
		rules: [
			{
				test: /\.less/i,
				use: [
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
							},
						},
					},
				],
				type: 'css',
			},
			{
				test: /\.css/i,
				type: 'css',
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2|ico)$/,
				type: 'asset/source',
			},
			{
				test: /\.svg$/,
				type: 'asset/source',
			},
			{
				test: /\.png$/,
				type: 'asset/resource',
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/],
				type: 'asset/source',
			},
			{
				test: /\.(mp4|webm)$/,
				type: 'asset/source',
			},
		],
	},
	plugins: options.plugins.concat([new NodePolyfill()]),
	/** 路径解析 */
	resolve: {
		modules: ['node_modules', paths.srcPath],
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		alias: {
			'@icons': path.resolve(process.cwd(), 'src/assets/icons'),
			'@components': path.resolve(process.cwd(), 'src/components'),
			'@images': path.resolve(process.cwd(), 'src/assets/images'),
			'@modules': path.resolve(process.cwd(), 'src/modules'),
		},
		mainFields: ['browser', 'module', 'main'],
	},
	devServer: options.devServer,
	target: 'web',
	builtins: {
		...options.builtins,

		presetEnv: {
			targets: ['>0.2%', 'not dead', 'not op_mini all', 'ie 11'],
		},
	},
});
