let lnb = document.querySelector(".lnb");
let gnb = document.querySelectorAll(".menu > li");
let sub = document.querySelectorAll(".sub");
function menu_in() {
  lnb.classList.add("on");
  sub.forEach(function (value, index) {
    value.classList.add("on");
  });
}
function menu_out() {
  lnb.classList.remove("on");
}
gnb.forEach(function (value, index) {
  value.onmouseenter = function () {
    menu_in();
  };
  value.onmouseleave = function () {
    menu_out();
  };
});
