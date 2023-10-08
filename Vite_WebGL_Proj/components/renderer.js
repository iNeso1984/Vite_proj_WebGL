import * as THREE from "three";

export const createRenderer = (canvas, width, height) => {
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(width, height);
  renderer.setPixelRatio(3);
  return renderer;
};
