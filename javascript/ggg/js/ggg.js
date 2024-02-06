let gnb = document.querySelectorAll(".menu li");
let lnb = document.querySelectorAll(".lnb");
let sub = document.querySelectorAll(".sub");

function myfnc() {
  lnb.forEach(function (key, item) {
    key.style.height = 0 + "px";
    gnb[item].querySelector("a").classList.remove("on");
  });
  document.querySelector("header").style.background = "none";
  document.querySelector(".logo").classList.remove("on");
  document.querySelectorAll(".menu li a").forEach(function (o, i) {
    o.style.color = "#fff";
  });
}

gnb.forEach(function (key, item) {
  key.onmouseenter = function () {
    sub.forEach(function (o, i) {
      let ht = sub[item].offsetHeight;
      lnb[item].style.height = ht + "px";
      gnb[item].querySelector("a").classList.add("on");
    });
    document.querySelector("header").style.background = "#fff";
    document.querySelector(".logo").classList.add("on");
    document.querySelectorAll(".menu li a").forEach(function (o, i) {
      o.style.color = "#333";
    });
  };
  key.onmouseleave = function () {
    myfnc();
  };
});
sub.forEach(function (key, item) {
  key.onmouseenter = function () {
    sub.forEach(function (o, i) {
      let ht = sub[item].offsetHeight;
      lnb[item].style.height = ht + "px";
      gnb[item].querySelector("a").classList.add("on");
    });
    document.querySelector("header").style.background = "#fff";
    document.querySelector(".logo").classList.add("on");
    document.querySelectorAll(".menu li a").forEach(function (o, i) {
      o.style.color = "#333";
    });
  };
  key.onmouseleave = function () {
    myfnc();
  };
});
