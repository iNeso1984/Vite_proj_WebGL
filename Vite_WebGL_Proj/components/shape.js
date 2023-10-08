import * as THREE from "three";

export const createSphere = () => {
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
    roughness: 0.5,
  });
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
};
