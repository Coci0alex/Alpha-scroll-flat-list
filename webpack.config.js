const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/components/AlphaScrollFlatList.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                return 'images/[name].[ext]';
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    targets: {
                      browsers: ['last 2 versions', 'safari >= 7']
                    }
                  }
                ],
                'react',
                'stage-2'
              ],
              plugins: ['babel-plugin-transform-object-rest-spread'],
              babelrc: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {}
  },
  plugins: []
};