
import _ from '../lib/underscore';

export function do_underscore() {
  var list = [1, 2, 3];

  _.each(list, function(l) {
    console.log('_.each', l);
  });
}

