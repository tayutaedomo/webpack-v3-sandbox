import _ from './lib/underscore';

export function doUnderscore() {
  var list = [1, 2, 3];

  _.each(list, function(l) {
    console.log('_.each', l);
  });
}

