'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  minifyCSS = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean');

// css task
gulp.task('css', function () {
  gulp.src(['src/css/**/*.css'])
    .pipe(minifyCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('web/dist/css'));
});

// js task
gulp.task('js', function () {
  gulp.src(['src/js/**/*.js'])
    .pipe(uglify())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('web/dist/js'));
});

// img task
gulp.task('img', function () {
  gulp.src(['src/img/**/*'])
    .pipe(imagemin())
    .pipe(gulp.dest('web/dist/img'));
});

// fonts task
gulp.task('fonts', function () {
  gulp.src(['src/fonts/*.ttf',
           'src/fonts/*.eot',
           'src/fonts/*.woff',
           'src/fonts/*.svg',
           'src/fonts/*.woff2'])
    .pipe(gulp.dest('web/dist/fonts'));
});

// clean task
gulp.task('clean', function () {
  gulp.src('web/dist', {
      read: false
    })
    .pipe(clean());
});

// default task
gulp.task('default', function () {
  gulp.start(['js', 'css', 'img', 'fonts']);
});

// watch task
gulp.task('watch', function () {
  gulp.start('default');

  gulp.watch('src/css/**/*.css', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.start('css');
  });

  gulp.watch('src/js/**/*.js', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.start('js');
  });

  gulp.watch('src/images/**/*', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.start('img');
  });

  gulp.watch('src/fonts/**/*', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.start('fonts');
  });
});
