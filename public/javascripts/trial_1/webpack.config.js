module.exports = {
  //entry: './public/javascripts/main.js',
  entry: `${__dirname}/src/main.js`,
  output: {
    //path: `${__dirname}/public/javascripts/`,
    path: `${__dirname}/dist/`,
    filename: 'bundle.js'
  }
};

