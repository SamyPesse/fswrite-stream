var os = require('os');
var path = require('path');
var fs = require('fs');

var fsWriteStream = require('../');

function tmpFile() {
    return path.join(os.tmpDir(), 'fsWriteStream' + Math.random());
}

describe('fswrite-stream', function() {
    it('should call callback once it\'s finished', function(cb) {
        var file = tmpFile();

        fsWriteStream(file, fs.createReadStream('package.json'), function(err, size) {
            if (err) return cb(err);
            cb();
        });
    });

});

