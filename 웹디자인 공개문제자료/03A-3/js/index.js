$(function () {
  $(".ban li:gt(0)").fadeOut();
  function nextani() {
    $(".ban li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".ban");
  }
  let interval = setInterval(function () {
    nextani();
  }, 2000);
  $(".sub").slideUp();
  $(".lnb li").hover(
    function () {
      $(this).find(".sub").stop().slideDown();
    },
    function () {
      $(this).find(".sub").stop().slideUp();
    }
  );
});
