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
        test: /threejs\/examples\/js/,
        use: [
          'imports-loader',
          'exports-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      'lib-three': path.join(__dirname, './src/lib/threejs'),
      'lib-three-examples': path.join(__dirname, './src/lib/threejs/examples'),
      'lib-three-controls': path.join(__dirname, './src/lib/threejs/examples/js/controls')
    }
  },
};

