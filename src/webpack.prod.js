import webpack from 'es-webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import config from './webpack.base';

import logger from './config/logger';

logger.info('building for production...');

console.log('config');
console.log(config);
const compiler = webpack(config, (err, stats) => {
  if (err) throw err;
  console.log('compile的状态显示');
  console.log(status);
});

// compiler.apply(new ProgressBarPlugin());
