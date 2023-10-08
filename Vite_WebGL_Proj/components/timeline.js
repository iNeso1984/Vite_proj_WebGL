import gsap from "gsap";

export const setupTimeline = (mesh) => {
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  tl.fromTo("nav", { y: "-100%" }, { y: "0%" });
  tl.fromTo(".title", { opacity: 0 }, { opacity: 1 });
};
