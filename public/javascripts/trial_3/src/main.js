
//import THREE from './lib/threejs/three';

//require('./lib/threejs/examples/js/controls/OrbitControls'); // Not working

// See: https://stackoverflow.com/questions/35968047/using-webpack-threejs-examples-and-typescript
const THREE = require('./lib/threejs/three');
// imports provides THREE to the OrbitControls example
// exports gets THREE.OrbitControls
THREE.OrbitControls = require('imports-loader?THREE=lib-three\/three!exports-loader?THREE.OrbitControls!lib-three-controls\/OrbitControls');


var scene = new THREE.Scene();

var fov = 75;

var height = 600;
var width = 400;
var aspect = height/width;

var near = 1;
var far = 1000;

var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 70);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(height, width);
document.body.appendChild(renderer.domElement);

var color = 'white';
var directionalLight = new THREE.DirectionalLight(color);
directionalLight.position.set(0, 7, 10);
scene.add(directionalLight);

var geometry = new THREE.CubeGeometry(20, 20, 20);
var material = new THREE.MeshPhongMaterial({color: 'orange'});
var cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, 0);
scene.add(cube);

function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
render();

var controls = new THREE.OrbitControls(camera);

