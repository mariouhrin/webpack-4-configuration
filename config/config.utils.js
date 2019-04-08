const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

module.exports = function stylesRules(env) {
  return {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      env.development ? 'style-loader' : MiniCssExtractPlugin.loader,
      { loader: 'css-loader', options: { importLoaders: 2 } },
      'postcss-loader',
      {
        loader: 'sass-loader',
        options: {
          importer: globImporter()
        }
      }
    ]
  };
};
