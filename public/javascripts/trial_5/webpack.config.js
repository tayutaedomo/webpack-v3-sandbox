
var path = require('path');
// var webpack = require('webpack');
// var bowerResolver = new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main']));

module.exports = {
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //devtool: 'source-map',
  module: {
    loaders: [
      {
        // Webpack に CreateJS のライブラリでは `this` に `window` を参照させ、`window.createjs` を export するように設定
        test: /bower_components(\/|\\)(PreloadJS|SoundJS|EaselJS|TweenJS)(\/|\\).*\.js$/,
        //loader: 'imports?this=>window!exports?window.createjs'
        loader: 'imports-loader?this=>window!exports-loader?window.createjs'
      },
    ]
  },
  // plugins: [
  //   // Webpack に bower モジュールの main ファイルを発見させる
  //   bowerResolver
  // ],
  resolve: {
    // bower_components をモジュールのルートディレクトリに追加
    // modulesDirectories: [
    //   path.join('..', '..', 'bower_components')
    // ]
  }
};

