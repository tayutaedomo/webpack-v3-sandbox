const gulp = require('gulp');
const uglify = require('gulp-uglify');
const saveLicense = require('uglify-save-license');
const concat = require('gulp-concat');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');


const trial_1_files = [
  'public/javascripts/trial_1/src/*'
];

gulp.task('build_trial_1', function() {
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


const trial_2_files = [
  'public/javascripts/trial_2/src/*'
];

gulp.task('build_trial_2', function() {
  const webpackConfig = require('./public/javascripts/trial_2/webpack.config');

  return webpackStream(webpackConfig, webpack)
    .pipe(concat('bundle.min.js'))
    .pipe(uglify({
      mangle: false,
      output: { comments: saveLicense }
    }))
    .pipe(gulp.dest('public/javascripts/trial_2/dist'));
});


const trial_3_files = [
  'public/javascripts/trial_3/src/*'
];

gulp.task('build_trial_3', function() {
  const webpackConfig = require('./public/javascripts/trial_3/webpack.config');

  return webpackStream(webpackConfig, webpack)
    .pipe(concat('bundle.min.js'))
    // .pipe(uglify({// TODO: Error occurred
    //   mangle: false,
    //   output: { comments: saveLicense }
    // }))
    .pipe(gulp.dest('public/javascripts/trial_3/dist'));
});


const trial_4_files = [
  'public/javascripts/trial_4/src/*'
];

gulp.task('build_trial_4', function() {
  const webpackConfig = require('./public/javascripts/trial_4/webpack.config');

  return webpackStream(webpackConfig, webpack)
    .pipe(concat('bundle.min.js'))
    // .pipe(uglify({// TODO: Error occurred
    //   mangle: false,
    //   output: { comments: saveLicense }
    // }))
    .pipe(gulp.dest('public/javascripts/trial_4/dist'));
});


gulp.task('build_all', [
  'build_trial_1',
  'build_trial_2',
  'build_trial_3',
  'build_trial_4'
]);


gulp.task('w', function() {
  let watch_trial_1 = gulp.watch(trial_1_files, ['build_trial_1']);
  watch_trial_1.on('change', function(event){
    console.log('javascript File ' + event.path + ' was ' + event.type + ', running task build_trial_1...');
  });

  let watch_trail_2 = gulp.watch(trial_2_files, ['build_trial_2']);
  watch_trail_2.on('change', function(event){
    console.log('javascript File ' + event.path + ' was ' + event.type + ', running task build_trial_2...');
  });

  let watch_trail_3 = gulp.watch(trial_3_files, ['build_trial_3']);
  watch_trail_3.on('change', function(event){
    console.log('javascript File ' + event.path + ' was ' + event.type + ', running task build_trial_3...');
  });

  let watch_trail_4 = gulp.watch(trial_4_files, ['build_trial_4']);
  watch_trail_4.on('change', function(event){
    console.log('javascript File ' + event.path + ' was ' + event.type + ', running task build_trial_4...');
  });
});

