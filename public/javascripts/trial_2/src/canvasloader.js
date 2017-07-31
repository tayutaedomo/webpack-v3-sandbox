//import CanvasLoader from './lib/heartcode-canvasloader';
var CanvasLoader = require("exports-loader?CanvasLoader!./lib/heartcode-canvasloader");

export function doCanvasloader() {
  var divId = 'loading_container';

  var div = document.createElement('div');
  div.setAttribute('id', divId);
  div.style.position = "absolute";
  div.style.top = "50%";
  div.style.left = "50%";
  div.style.marginTop= "-20px";
  div.style.marginLeft= "-20px";
  document.body.appendChild(div);

  var loading = new CanvasLoader(divId);

  loading.setColor('#c2c2c2');
  loading.show();
}

