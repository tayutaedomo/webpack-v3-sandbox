const gulp = require("gulp");
const uglify = require('gulp-uglify');
const saveLicense = require('uglify-save-license');
const concat = require('gulp-concat');
const webpackStream = require("webpack-stream");
const webpack = require("webpack");

const webpackConfig = require("./webpack.config");

gulp.task("default", function() {
  return webpackStream(webpackConfig, webpack)
    .pipe(concat('bundle.min.js'))
    .pipe(uglify({
      mangle: false,
      //compress: true,
      //beautify: true,
      //preserveComments: 'some' // Error occurred
      output: { comments: saveLicense }
    }))
    .pipe(gulp.dest("public/javascripts/"));
});


const js_files = [
  'public/javascripts/lib/*',
  'public/javascripts/trial_1/*',
  'public/javascripts/trial_2/*',
  'public/javascripts/main.js',
];

gulp.task('w', function() {
  let watch_js = gulp.watch(js_files, ['default']);
  watch_js.on('change', function(event){
    console.log('javascript File ' + event.path + ' was ' + event.type + ', running task default...');
  });
});

