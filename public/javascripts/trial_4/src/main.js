
const videojs = require('./lib/videojs/video');
window.videojs = videojs;

//require('imports-loader?videojs=lib-videojs\/video!./lib/videojs-contrib-hls/videojs-contrib-hls.min');
require('./lib/videojs-contrib-hls/videojs-contrib-hls.min');

var player = videojs('example-video');
player.play();

