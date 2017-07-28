const gulp = require('gulp');
const uglify = require('gulp-uglify');
const saveLicense = require('uglify-save-license');
const concat = require('gulp-concat');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

gulp.task('trial_1', function() {
  const webpackConfig = require('./public/javascripts/trial_1/webpack.config');

  return webpackStream(webpackConfig, webpack)
    .pipe(concat('bundle.min.js'))
    .pipe(uglify({
      mangle: false,
      //compress: true,
      //beautify: true,
      //preserveComments: 'some' // Error occurred
      output: { comments: saveLicense }
    }))
    .pipe(gulp.dest('public/javascripts/trial_1/dist'));
});

const trial_1_js_files = [
  'public/javascripts/trial_1/src/*'
];


gulp.task('trial_2', function() {
  const webpackConfig = require('./public/javascripts/trial_2/webpack.config');

  return webpackStream(webpackConfig, webpack)
    .pipe(concat('bundle.min.js'))
    .pipe(uglify({
      mangle: false,
      output: { comments: saveLicense }
    }))
    .pipe(gulp.dest('public/javascripts/trial_2/dist'));
});

const trial_2_js_files = [
  'public/javascripts/trial_2/src/*'
];


gulp.task('w', function() {
  let watch_trial_1 = gulp.watch(trial_1_js_files, ['trial_1']);
  watch_trial_1.on('change', function(event){
    console.log('javascript File ' + event.path + ' was ' + event.type + ', running task trial_1...');
  });

  let watch_trail_2 = gulp.watch(trial_2_js_files, ['trial_2']);
  watch_trail_2.on('change', function(event){
    console.log('javascript File ' + event.path + ' was ' + event.type + ', running task trial_2...');
  });
});

