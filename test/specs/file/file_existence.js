/* jshint mocha: true */

var assert = require('assert');
var fs = require('fs'),
    util = require('util'),
    path = require('path');

var async = require('async'),
    wrench = require('wrench');

var pkg = require('./../../../package.json'),
    dirs = pkg.configs.directories,
    main = require('../../../index');

var expectedFilesInArchiveDir = [
    pkg.name + '_v' + pkg.version + '.zip'
];

var expectedFilesInDistDir = [

    'LICENSE.txt',
    'README.md',
    'app/',
        'client/',
            'index.html',
            'lib/',
                'template_helpers.js',
            'stylesheets/',
                '_variables.scss',
                'helpers.scss',
                'templates/',
                    'layouts/',
                        'layout.scss/',
                    'modules/',
                        'common/',
                            'footer.scss',
                            'header.scss',
                            'loading.scss',
                        'items/',
                            'items.scss',
                            'user_item.scss',
                        'modules.scss',
                        'offers/',
                            'offer_modal.scss',
                        'trades/',
                            'trades.scss',
                        'webcam/',
                            'webcam.scss',
                'views/',
                    'views.scss',
                'typography.scss',
            'templates/',
                'layouts/',
                    'layout.html',
                'modules/',
                    'camera/',
                        'camera.html',
                        'camera.js',
                    'common/',
                        'footer.html',
                        'header.html',
                        'header.js',
                        'loading.html',
                        'redirect.html',
                    'items/',
                        'item.html',
                        'item.js',
                        'items.html',
                        'items.js',
                        'post_items.html',
                        'post_items.js',
                        'user_item.html',
                        'user_item.js',
                        'user_items.html',
                        'user_items.js',
                    'messages/',
                        'message.html',
                        'messages.html',
                        'messages.js',
                    'offers/',
                        'offer.html',
                        'offer.js',
                        'offer_modal.html',
                        'offer_modal.js',
                        'offers.html',
                        'offers.js',
                    'trades/',
                        'trade.html',
                        'trades.html',
                        'trades.js',
                    'webcam/',
                        'webcam.html',
                        'webcam.js',
                'views/',
                    'exchange/',
                        'exchange.html',
                        'transaction.html',
                    'login',
                        'login.html',
                    'post/',
                        'post.html',
                        'post.js',
                    'profile/',
                        'profile.html',
                    'root/',
                        'root.html',
        'collections',
            'items.js',
            'messages.js',
            'offers.js',
            'trades.js',
        'lib/',
            'config',
                'accounts.js',
        'public/',
            'favicon.ico',
            'images/',
                'items/',
                    'damir/',
                        'acoustic.jpg',
                        'bass.jpg',
                    'husam/',
                        'amp.jpg',
                    'lespaul.jpg',
            'logo.png',
        'router/',
            'routes.js',
            'seo.js',
        'server/',
            'methods/',
                'items.js',
                'messages.js',
                'offers.js',
                'trades.js',
            'publications/',
                'items.js',
                'messages.js',
                'offers.js',
                'trades.js',
            'startup/',
                'bootstrap.js',
                'indexes.js',
        'tests/',
            'likedEvent.test',
            'trade.test',
    'environments/',
        'local/',
            'settings.json',
        'production/',
            'mup.json',
        'settings.json',
    'run.sh'

];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe('Test files', function () {
    var distDirFiles = {},
        srcDirFiles = {},
        dirsInDistDir = {},
        dirsInDistDirs = {};

    var directoriesUnderTest = {
            dist: main.dist,
            src: main.src
        },
        everythingUnderTest = {};

   it('Gets files in: dist/, src/', function () {
       async.forEachOf(directoriesUnderTest, function (value, key) {
           fs.readdir(value, function (err, files) {
               if (err) console.error(err);
               everythingUnderTest[key] = files
           });
       });
    });
    it('Gets dirs in: dist/, src/', function () {
        async.forEachOf(directoriesUnderTest, function (value, key) {
            var filesPath = directoriesUnderTest[key],
                filesAndDirs = everythingUnderTest[key];

            async.forEachOf(filesAndDirs, function (value) {
                var pathOfFileWithExtOrDir = filesPath + value,
                    boolIfDir = fs.statSync(pathOfFileWithExtOrDir).isDirectory();

                switch (boolIfDir) {
                    case true:
                        console.log(wrench.readdirSyncRecursive(pathOfFileWithExtOrDir));
                }
            });
        });
    });
    it('Prints', function () {
        //console.log(everythingUnderTest);
        //console.log(srcDirItems);
    });
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


