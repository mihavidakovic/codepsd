var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader?url=false' }
          ]
        })
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
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
    new ExtractTextPlugin({ // define where to save the file
      filename: '../assets/css/main.css'
    }),
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

// module.exports = {
//   entry: './assets/main.js',
//   output: {
//     path: path.resolve('dist'),
//     filename: 'index_bundle.js'
//   },
//   module: {
//     rules: [
//       { test: /\.css$/,
//         use: [
//           { loader: "style-loader" },
//           { loader: "css-loader" }
//         ]
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       }, {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: "babel-loader"
//       }
//     ]
//   }
// }