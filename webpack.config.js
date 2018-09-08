const path = require('path')

module.exports = {
  mode: 'none',
  entry: ['./assets/js/main.js'],
  output: {
    filename: './assets/app.js'
  },
  module: {
    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { // file-loader for webpack
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader?name=../dist/fonts/[name].[ext]'
      },
      { // file-loader for webpack
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '../assets/dist/img/[name]_[hash:7].[ext]',
        }      
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'babel-preset-es2015',
              'babel-preset-react',
         ].map(require.resolve)
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    
  ],
  watchOptions: {
    poll: 1000,
    ignored: [
        path.resolve(__dirname, 'fonts'),
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'vendor')
      ]
  }
};