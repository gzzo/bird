import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import webpack from 'webpack'
import merge from 'webpack-merge'

import { getRules } from './webpack.util.babel'
import common from './webpack.common.babel'

export default merge(common, {
  mode: 'development',

  output: {
    filename: '[name].[fullhash].js',
  },

  target: 'web',

  devtool: 'cheap-module-source-map',

  module: {
    rules: getRules(true),
  },

  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api', '/socket'],
        target: 'http://localhost:4000',
        ws: true,
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(true),
    }),
  ],
})
