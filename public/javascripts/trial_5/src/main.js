
console.log('Trial 5');

var createjs = require('../../../bower_components/PreloadJS/lib/preloadjs');

var manifest = [
  { id: 'bird', src: '/images/1463732339_bird.png'},
  { id: 'potter', src: '/images/1463732482_potter.png'}
];

var loadQueue = new createjs.LoadQueue(false);

loadQueue.on('complete', function() {
  var dom = document.querySelector('#box');
  dom.appendChild(loadQueue.getResult('bird'));
  dom.appendChild(loadQueue.getResult('potter'));
});

loadQueue.loadManifest(manifest);

