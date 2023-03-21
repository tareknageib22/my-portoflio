
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.to('[tn-element-attribute="target"]', {x: 300, duration: 2,delay:.3,stagger:.3});
