
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.to("[target]", {x: 100, duration: 1});
