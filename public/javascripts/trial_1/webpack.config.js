module.exports = {
  //entry: './public/javascripts/main.js',
  entry: `${__dirname}/main.js`,
  output: {
    //path: `${__dirname}/public/javascripts/`,
    path: `${__dirname}/`,
    filename: 'bundle.js'
  }
};

