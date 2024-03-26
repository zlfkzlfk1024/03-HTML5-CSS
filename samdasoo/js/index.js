let ani1 = gsap.timeline();
ani1.to(".t2", {
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani1,
  trigger: ".img1 img:last-child",
  start: "top top",
  end: "+=800",
  scrub: true,
});
let ani2 = gsap.timeline();
ani2.to(".t3", {
  autoAlpha: 1,
});
ScrollTrigger.create({
  animation: ani2,
  trigger: ".img2 img:last-child",
  start: "top top",
  end: "+=800",
  scrub: true,
});
let ani3 = gsap.timeline();
ani2.to(".sam", {
  autoAlpha: 0,
});
ScrollTrigger.create({
  animation: ani2,
  trigger: ".wrap",
  start: "top top",
  end: ".section3",
  scrub: true,
});
let ani4 = gsap.timeline();
ani4
  .to(".lang p", {
    color: "#fff",
  })
  .to(".position-link li a", {
    border: "1px solid #fff",
  });
ScrollTrigger.create({
  animation: ani4,
  trigger: ".img1 img:last-child",
  start: "top top",
  end: ".section3",
  scrub: true,
});
