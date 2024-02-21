let lnb = document.querySelector(".lnb");
let gnb = document.querySelectorAll(".menu > li");
let sub = document.querySelectorAll(".sub");
function menu_in() {
  lnb.classList.add("on");
  gnb[index].querySelector(".sub");
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
