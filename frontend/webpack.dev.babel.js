import webpack from 'webpack'
import merge from 'webpack-merge'

import { getRules } from './webpack.util.babel'
import common from './webpack.common.babel'

export default merge(common, {
  mode: 'development',

  output: {
    filename: '[name].[fullhash].js',
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: getRules(true),
  },

  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
      },
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(true),
    }),
  ],
})
