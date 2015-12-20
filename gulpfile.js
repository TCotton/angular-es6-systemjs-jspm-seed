/**
 * Created by andywalpole on 18/12/2015.
 */
// sudo npm install -g commitizen
// sudo npm install -g conventional-changelog
// sudo npm install -g modernizr
//  delete files and folders -> https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
'use strict';
// gulp-ng-annotate
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const devPath = './gulp/gulp-development/';
const prodPath = './gulp/gulp-production/';

let getDevTask = function getTask(task) {
  return require(devPath + task)(gulp, plugins);
};

let getProdTask = function getTask(task) {
  return require(prodPath + task)(gulp, plugins);
};

gulp.task('sass', getDevTask('gulp-sass'));

gulp.task('default', function() {
  return gulp.src('CHANGELOG.md', {
      buffer: false
    })
    .pipe(conventionalChangelog({
      preset: 'angular'
    }))
    .pipe(gulp.dest('./'));
});
