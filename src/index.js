import { gsap } from "gsap";

gsap.from(".from-left", {
  x: -100,
  duration: 2,
  ease: "bounce.in",
});

gsap.from(".from-right", {
  x: 100,
  rotation: 360,
  ease: "elastic.out",
  duration: 2,
});

gsap.to(".title", {
  y: 5,
  scale: 0.9,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
  stagger: 0.3,
});

gsap.to("article", {
  backgroundColor: "#2e8b57",
  duration: 3,
});

let headerTl = gsap.timeline();

headerTl.to(".timeline h1", { x: 600, duration: 2 });
headerTl.to(".timeline h2", { x: 600, duration: 1 });
headerTl.to(".timeline h3", { x: 600, duration: 1 });
