const path = require('path');

const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const srcPath = path.resolve(process.cwd(), 'src');
const babelPath = path.resolve(process.cwd(), 'babel.config.js');
const appHtmlPath = path.resolve(process.cwd(), 'public/index.html');
const iconPath = path.resolve(process.cwd(), 'public/img/insight_logo.ico');
const appPublic = path.resolve(process.cwd(), 'public');
const publicPath = require(packageJsonPath).homepage;

module.exports = {
	packageJsonPath,
	srcPath,
	babelPath,
	appHtmlPath,
	appPublic,
	publicPath,
	iconPath,
};
