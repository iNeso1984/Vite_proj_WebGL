import * as THREE from "three";

export const createLight = () => {
  const light = new THREE.PointLight(0xffffff, 6, 100);
  light.position.set(0, 2, 8);
  return light;
};
