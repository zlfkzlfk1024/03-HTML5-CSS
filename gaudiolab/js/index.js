let intro = gsap.timeline();
intro
  .to(
    ".content",
    {
      width: 800,
      height: 589,
      left: "50%",
      top: "50%",
      transform: "translateY(-50%)",
    },
    "text"
  )
  .to(
    ".content .pad",
    {
      autoAlpha: 1,
    },
    "text"
  )
  .to(
    ".content .video > video",
    {
      position: "absolute",
      left: "19px",
      top: "21px",
      width: "96%",
      height: "94%",
      borderRadius: 32,
    },
    "text"
  )
  .to(
    ".intro_text1",
    {
      fontSize: "48px",
      display: "none",
    },
    "text"
  )
  .to(".intro_text2", {
    autoAlpha: 1,
  });
ScrollTrigger.create({
  animation: intro,
  trigger: ".intro",
  scrub: true,
  pin: true,
});

$(".contentBox").hover(
  function () {
    $(".item").eq(0).css({ background: "#000", transition: "1s" });
    $(".item_num").css({ color: "#fff" });
    $(".item_title").css({ color: "#fff" });
  },
  function () {
    $(".item").eq(0).css({ background: "#fff" });
    $(".item_num").css({ color: "#000" });
    $(".item_title").css({ color: "#000" });
  }
);
