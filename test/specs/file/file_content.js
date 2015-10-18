/* jshint mocha: true */

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var pkg = require('../../../package.json');
var dirs = pkg['configs'].directories;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function checkString(file, string, done) {

    var character = '';
    var matchFound = false;
    var matchedPositions = 0;
    var readStream = fs.createReadStream(file, { 'encoding': 'utf8' });

    readStream.on('close', done);
    readStream.on('error', done);
    readStream.on('readable', function () {

        // Read file until the string is found
        // or the whole file has been read
        while (matchFound !== true &&
                (character = readStream.read(1)) !== null) {

            if (character === string.charAt(matchedPositions)) {
                matchedPositions += 1;
            } else {
                matchedPositions = 0;
            }

            if (matchedPositions === string.length) {
                matchFound = true;
            }

        }

        assert.equal(true, matchFound);
        this.close();

    });

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function runTests() {

    var dir = dirs.dist;

    describe('Should report some passes and fails', function () {

        it('Tests', function (done) {
            assert(3 !== 3, 'This should fail');
            done();
        });

        it('Tests', function (done) {
            assert(3 == 3, 'This should fail');
            done();
        });

    });

}

runTests();
