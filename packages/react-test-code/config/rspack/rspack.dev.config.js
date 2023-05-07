const paths = require('./utils/paths');
const path = require('path');

/** dev环境rspack */
module.exports = require('./rspack.base.config')({
	mode: 'development',
	devtool: 'eval-source-map',
	entry: {
		main: path.resolve(process.cwd(), './src/index.tsx'),
	},
	output: {
		filename: 'static/js/[name].bundle.js',
		chunkFilename: 'static/js/[name].chunk.js',
	},
	devServer: {
		compress: true,
		hot: true,
		host: 'www.company.ui.cn',
		port: 3100,
		historyApiFallback: {
			disableDotRule: true,
			index: paths.publicPath,
		},
		static: {
			publicPath: [paths.publicPath],
		},
		devMiddleware: {
			publicPath: paths.publicPath.slice(0, -1),
		},
		// quiet: true,
		open: true,
	},
	/** dev环境无需优化 */
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendor1: {
					test: /[\\/]node_modules[\\/](xlsx|insight-iclient|echarts|@material-ui)[\\/]/,
					name: 'vendor1',
					priority: 2,
				},
			},
		},
	},
	plugins: [],
	builtins: {
		html: [
			{
				inject: 'head',
				template: paths.appHtmlPath,
			},
		],
		define: {
			'process.env.NODE_ENV': JSON.stringify('development'),
			/** 处理项目里的 PUBLIC_URL */
			'process.env.PUBLIC_URL': JSON.stringify(paths.publicPath.slice(0, -1)),
		},
		progress: true,
	},
});
