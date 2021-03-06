import ExtractTextPlugin from 'extract-text-webpack-plugin';

export const imageLoader = (path, imgName, limit) => {
  return {
    test: /\.(png|jpe?g|gif)$/,
    use: [
      {
        loader: `file-loader`,
        options: {
          limit,
          name: `${path}/${imgName}/[name].[ext]`
        }
      }
    ]
  }
};

export const fontLoader = (path, fontName, limit) => {
  return {
    test: /\.(woff|woff2|eot|ttf|svg)(\?(.*))?$/,
    use: [
      {
        loader: `file-loader`,
        options: {
          limit,
          name: `${path}/${fontName}/[name].[ext]`
        }
      }
    ]
    
  }
};

export const mediaLoader = (path, name) => {
  return {
    test: /\.(swf|wav|mp3|mpeg|mp4|webm|ogv)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: `file-loader`,
        options: {
          name: `${path}/${name}/[name].[ext]`
        }
      }
    ]
  }
};

export const jsLoader = (options, exclude) => {
  return {
    test: /\.js[x]?$/,
    loader: 'happypack/loader',
    options,
    exclude,
  }
};

export const cssLoader = (options) => {
  return {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options
      }]
    })
  }
};

export const lessLoader = (options) => {
  return {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [{
        loader: 'css-loader',
        options
      }, {
        loader: 'less-loader'
      }]
    })
  }
};

export const importsLoader = (regExp) => {
  return {
    test: new RegExp(`(${regExp.join('|')})$`),
    loader: 'imports-loader?define=>false&module=>false&exports=>false&this=>window',
  }
};

export const jsonLoader = () => {
  return {
    test: /\.json$/,
    loader: 'json-loader'
  }
};

export const eslintLoader = () => {
  return {
    enforce: 'pre',
    test:/\.(js|html)$/,
    loader: 'eslint-loader',
    options: {
      fix: true,
    }
  };
};
