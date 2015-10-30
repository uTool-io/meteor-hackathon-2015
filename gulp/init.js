var fs = require('fs');
var path = require('path');

var gulp = require('gulp'),
    shell = require('shelljs'),
    git = require('gulp-git');

// Load all gulp plugins automatically
// and attach them to the `plugins` object
var plugins = require('gulp-load-plugins')();

// Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
var runSequence = require('run-sequence');


gulp.task('init', ['meteor', 'submodules']);

gulp.task('meteor', function () {
    shell.exec('curl https://install.meteor.com/ | sh');
});

gulp.task('submodules', function () {
    git.updateSubmodule();
});

gulp.task('serve', function () {
    shell.exec('cd src/app && meteor');
});

gulp.task('stat', function(){
    git.status({args: '--porcelain'}, function (err, stdout) {
        if (err) throw err;
    });
});
