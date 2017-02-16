const {resolve} = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = function (env = {}) {
  const config = {
    entry: {
      app: './src/main.ts',
    },
    output: {
      path: resolve(__dirname, 'out'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader' },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.png$/, loader: 'file-loader' },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      new HTMLPlugin({ template: './src/assets/index.html' })
    ]
  }

  if (!env.production) {
    config.devtool = 'source-map'
    config.devServer = {
      contentBase: 'out'
    }
  }

  return config
}
