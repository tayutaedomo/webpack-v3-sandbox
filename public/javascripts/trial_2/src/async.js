import async from 'async';

export function doAsync() {
  async.series([
    function(callback) {
      console.log('async.series 1');
      callback();
    },
    function(callback) {
      console.log('async.series 2');
      callback();
    }
  ], function(err, result) {
    console.log('async.series ended.');
  });
}

