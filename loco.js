
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".locomotive-scroll"),
  smooth: true,
  multiplier: 1.0,
}); 

// Wait 2 seconds then calculate the new page height
setTimeout(() => {  
	locoScroll.update();
}, 2000);
