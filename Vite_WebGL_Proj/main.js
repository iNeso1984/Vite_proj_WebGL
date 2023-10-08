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

//scroll
function onLinkClick() {
  document.getElementsByTagName("p")[0].scrollIntoView();
}
onLinkClick();

//chart
const ctx = document.getElementById("chart-example").getContext("2d");
const labels = [
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
];

const data = {
  labels,
  datasets: [
    {
      data: [3108, 4644, 7880, 12219, 17459, 25655, 35026, 45370, 62202, 80096],
      label: "Amazon Sales from 2012-2022",
    },
  ],
};
const config = {
  type: "line",
  data: data,
  options: { responsive: true },
};
const myChart = new Chart(ctx, config);
