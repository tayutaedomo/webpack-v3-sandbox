module.exports = {
  entry: './public/javascripts/main.js',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/public/javascripts/`,
    // 出力ファイル名
    filename: 'bundle.js'
  }
};

