# fswrite-stream [![Build Status](https://travis-ci.org/SamyPesse/fswrite-stream.svg?branch=master)](https://travis-ci.org/SamyPesse/fswrite-stream)

> Write a stream to a file with correct error handling, call the callback once it's finished

### Install

```
$ npm install fswrite-stream --save
```

### Usage

```js
var fsWriteStream = require('fswrite-stream');


fsWriteStream('./test.html', request('http://google.fr'), function(err, size) {
    if (err) console.log(err);
    else console.log('Bytes written:', size);
})
```

