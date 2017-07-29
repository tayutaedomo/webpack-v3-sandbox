const path = require('path');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /videojs-contrib-hls/,
        use: [
          'imports-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'lib-videojs': path.join(__dirname, './src/lib/videojs')
      //'lib-videojs-hls': path.join(__dirname, './src/lib/videojs-contrib-hls')
    }
  },
};

