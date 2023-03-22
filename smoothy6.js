/*
  if (!document.querySelector("html").classList.contains('.page-wrapper')){
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: 'vertical', // vertical, horizontal
    gestureOrientation: 'vertical', // vertical, horizontal, both
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })}

  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress })
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  */
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

//here is gsap
gsap.from('[tn-element-attribute="target"]', {
  x: -200,
  scale:1.5,
  opacity:0,
  duration: 0.5,
  stagger: 0.3,
  yoyo: true,
  repeat:20,
 
})
