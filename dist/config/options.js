'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _yargs=require('yargs');var _path=require('path');var _path2=_interopRequireDefault(_path);var _utils=require('../utils');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var parameters=_yargs.argv.parameters?require(_path2.default.resolve(_yargs.argv.parameters)):{};var specialArgv={};_yargs.argv._.forEach(function(arg){if(arg.indexOf(':')>0){var argArr=arg.split(':');specialArgv[argArr[0]]=argArr[1];}});// 默认配置项
var defaultOptions=Object.assign({output:{path:'web/static-dist/',publicPath:'/static-dist/'},libs:{},noParseDeps:{},onlyCopys:[],global:{},externals:{jquery:'jQuery'},regExp:'react|webuploader|postal|lodash',minChunks:5,commonsChunkFileName:'common',entryMainName:'main',entryFileName:'index',extryCssName:'main',baseName:'libs/base',globalDir:'app/Resources/static-src',nodeModulesDir:'node_modules',pluginsDir:'plugins',bundlesDir:'src',activitiesDir:'activities',themesDir:'web/themes',fontlimit:1024,imglimit:1024,fontName:'fonts',imgName:'img',mediaName:'media',copyName:'img',isESlint:true,isNeedCommonChunk:'.is-need-common-chunk'},parameters);// 绝对路径
var rootDir=_path2.default.resolve('./');var globalDir=_path2.default.resolve(rootDir,defaultOptions.globalDir);var nodeModulesDir=_path2.default.resolve(rootDir,defaultOptions.nodeModulesDir);var pluginsDir=_path2.default.resolve(rootDir,defaultOptions.pluginsDir);var themesDir=_path2.default.resolve(rootDir,defaultOptions.themesDir);var bundlesDir=_path2.default.resolve(rootDir,defaultOptions.bundlesDir);var activitiesDir=_path2.default.resolve(rootDir,defaultOptions.activitiesDir);// 是否编译相应模块
var isBuildAllModule=!!specialArgv.module?false:true;var argvModule=specialArgv.module?specialArgv.module.split(','):[];var buildModule=[];argvModule.forEach(function(item){if((0,_utils.isPlugin)(item)){buildModule.push(_path2.default.resolve(pluginsDir,item));}else if((0,_utils.isBundle)(item)){buildModule.push(_path2.default.resolve(bundlesDir,item));}else{buildModule.push(_path2.default.resolve(themesDir,item));}});// 是否watch相应模块
var isWatchAllModule=!!specialArgv.watch?false:true;var watchModule=specialArgv.watch?specialArgv.watch.split(','):[];var ignoredDirs=[];if(!isWatchAllModule){ignoredDirs=ignoredDirs.concat([globalDir],(0,_utils.searchIgnoreDirs)(pluginsDir,watchModule),(0,_utils.searchIgnoreDirs)(bundlesDir,watchModule),(0,_utils.searchIgnoreDirs)(themesDir,watchModule));}var options=Object.assign({},defaultOptions,{output:{path:_path2.default.resolve(rootDir,defaultOptions.output.path),publicPath:defaultOptions.output.publicPath},// 开发模式
__DEBUG__:specialArgv.sourcemap,__DEV__:process.env.NODE_ENV==='development',// 高级模式
__DEV_SERVER_PORT__:specialArgv.port||3030,__ANALYZER__:specialArgv.analyzer,__DEVTOOL__:specialArgv.sourcemap?'source-map':'cheap-module-eval-source-map',__VERBOSE__:specialArgv.verbose||false,rootDir:rootDir,globalDir:globalDir,nodeModulesDir:nodeModulesDir,pluginsDir:pluginsDir,themesDir:themesDir,bundlesDir:bundlesDir,activitiesDir:activitiesDir,isBuildAllModule:isBuildAllModule,buildModule:buildModule,isWatchAllModule:isWatchAllModule,ignoredDirs:ignoredDirs});console.log('options.activitiesDir');console.log(options.activitiesDir);exports.default=options;