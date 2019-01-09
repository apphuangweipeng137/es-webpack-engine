'use strict';var _express=require('express');var _express2=_interopRequireDefault(_express);var _esWebpack=require('es-webpack');var _esWebpack2=_interopRequireDefault(_esWebpack);var _path=require('path');var _path2=_interopRequireDefault(_path);var _cors=require('cors');var _cors2=_interopRequireDefault(_cors);var _fs=require('fs');var _fs2=_interopRequireDefault(_fs);var _chokidar=require('chokidar');var _chokidar2=_interopRequireDefault(_chokidar);var _esWebpackNotifier=require('es-webpack-notifier');var _esWebpackNotifier2=_interopRequireDefault(_esWebpackNotifier);var _progressBarWebpackPlugin=require('progress-bar-webpack-plugin');var _progressBarWebpackPlugin2=_interopRequireDefault(_progressBarWebpackPlugin);var _logger=require('./config/logger');var _logger2=_interopRequireDefault(_logger);var _middleware=require('./config/middleware');var _middleware2=_interopRequireDefault(_middleware);var _options=require('./config/options');var _options2=_interopRequireDefault(_options);var _entry=require('./config/entry');var entry=_interopRequireWildcard(_entry);var _utils=require('./utils');var _webpack=require('./webpack.base');var _webpack2=_interopRequireDefault(_webpack);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}if(!(0,_utils.fsExistsSync)('.webpack-watch.log')){_logger2.default.error('请在项目根目录下添加.webpack-watch.log文件, 否则无法监听新增入口JS文件');}var app=(0,_express2.default)();var compiler=(0,_esWebpack2.default)(_webpack2.default);compiler.apply(new _esWebpackNotifier2.default());compiler.apply(new _progressBarWebpackPlugin2.default());app.use((0,_middleware2.default)(compiler,_options2.default.output.publicPath));// app.use(cors());
app.listen(_options2.default.__DEV_SERVER_PORT__,'0.0.0.0',function(err){_logger2.default.info('Express server listening on '+_options2.default.__DEV_SERVER_PORT__+' in '+app.settings.env+' node');if(err){_logger2.default.error(err);}});var watchDir=[_options2.default.globalDir+'/app',_options2.default.pluginsDir,_options2.default.themesDir,_options2.default.bundlesDir,_options2.default.activitiesDir];console.log('打印出options.activitiesDir');console.log(_options2.default.activitiesDir);var watcher=_chokidar2.default.watch(watchDir,{ignored:/[\/\\]\./,ignoreInitial:true});var isEntryFile=function isEntryFile(path){return path.indexOf(_options2.default.entryFileName+'.js')!==-1&&path.indexOf('static-src')!==-1;};// 监听新增入口文件
watcher.on('add',function(path){if(isEntryFile(path)){if((0,_utils.fsExistsSync)('.webpack-watch.log')){_logger2.default.info('\u5165\u53E3JS\u6587\u4EF6'+path+'\u88AB\u65B0\u589E');_fs2.default.writeFileSync('.webpack-watch.log','File '+path+' has been added','utf8');}else{_logger2.default.error("请在项目根目录下添加.webpack-watch.log文件, 否则无法监听新增入口JS文件");}}});