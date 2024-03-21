/* $(function () {
  $(".ban li:gt(0)").fadeOut();
  function nextani() {
    $(".ban li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".ban");
  }
  let interval = setInterval(function () {
    nextani();
  }, 2000);
});
 */
/* $(function () {
  function nextani() {
    $(".ban").animate({ marginTop: "-300px" }, 500, function () {
      $(".ban").append($(".ban li:first"));
      $(".ban").css("marginTop", "0");
    });
  }
  let interval = setInterval(function () {
    nextani();
  }, 2000);
}); */
$(function () {
  function nextani() {
    $(".ban").animate({ marginLeft: "-800px" }, 500, function () {
      $(".ban").append($(".ban li:first"));
      $(".ban").css("marginLeft", "0");
    });
  }
  let interval = setInterval(function () {
    nextani();
  }, 2000);
});
