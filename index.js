var fs = require('fs');
var lengthStream = require('length-stream');

// Write a stream to a file
function writeStream(filename, rstream, opts, callback) {
    if (!callback) {
        callback = opts;
        opts = {};
    }

    var size = 0;
    var wstream = fs.createWriteStream(filename, opts);
    var lstream = lengthStream(function(length) {
        size = length;
    });

    function cleanup() {
        lstream.removeAllListeners();
        wstream.removeAllListeners();
        rstream.removeAllListeners();
    }

    function onError(err) {
        cleanup();
        callback(err);
    }

    lstream.on('error', onError);
    wstream.on('error', onError);
    rstream.on('error', onError);

    wstream.on('open', function() {
        rstream
        .pipe(lstream)
        .pipe(wstream);
    });

    wstream.on('finish', function() {
        cleanup();
        callback(null, size);
    });
}

module.exports = writeStream;
