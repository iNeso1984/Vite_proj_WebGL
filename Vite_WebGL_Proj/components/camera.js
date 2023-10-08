import * as THREE from "three";

export const createCamera = (width, height) => {
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.z = 20;
  return camera;
};
