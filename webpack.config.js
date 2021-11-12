const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  mode: 'development',
  entry: {
    main: resolve('src/index.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('dist')
  }
}