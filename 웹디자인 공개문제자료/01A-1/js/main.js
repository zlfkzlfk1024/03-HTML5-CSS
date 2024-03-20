$(function () {
  function nextani() {
    $(".ban").animate({ marginTop: "-300px" }, 500, function () {
      //$(".ban li").eq(0).appendTo(".ban");
      $(".ban").append($(".ban li:first"));
      $(".ban").css("marginTop", "0");
    });
  }
  let interval = setInterval(function () {
    nextani();
  }, 2000);
});
