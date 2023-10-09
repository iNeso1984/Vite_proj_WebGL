import * as THREE from "three";
import "./style.css";
import { createSphere } from "./components/shape";
import { createLight } from "./components/lights";
import { createCamera } from "./components/camera";
import { createRenderer } from "./components/renderer";
import { createControls } from "./components/controls";
import { handleMouseAnimation } from "./components/mouseAnimation";
import { setupTimeline } from "./components/timeline";
import { setupSmoothScroll } from "./components/smoothScroll";

const scene = new THREE.Scene();
const canvas = document.querySelector(".webgl");

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const mesh = createSphere();
scene.add(mesh);

const light = createLight();
scene.add(light);

const camera = createCamera(sizes.width, sizes.height);
scene.add(camera);

const renderer = createRenderer(canvas, sizes.width, sizes.height);
renderer.render(scene, camera);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const controls = createControls(camera, canvas);

// Setup mouse animation
handleMouseAnimation(canvas, sizes, mesh);

// Setup timeline animation
setupTimeline(mesh);

// Setup smooth scrolling
setupSmoothScroll();

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();
