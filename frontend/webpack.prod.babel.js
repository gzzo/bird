import webpack from 'webpack'
import merge from 'webpack-merge'

import { getRules } from './webpack.util.babel'
import common from './webpack.common.babel'

export default merge(common, {
  mode: 'production',

  devtool: 'source-map',

  target: 'browserslist',

  module: {
    rules: getRules(),
  },

  plugins: [
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(false),
    }),
  ],
})
