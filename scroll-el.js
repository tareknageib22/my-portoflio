
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


gsap.from('[tn-element-attribute="target"]', {x: -300, duration:.4,stagger:.3});
