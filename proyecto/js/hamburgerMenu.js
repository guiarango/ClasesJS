var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.right == "-250px";

menuBtn.addEventListener("click", function () {
  if (sideNav.style.right == "-250px" || sideNav.style.right == "") {
    sideNav.style.right = "0";
    menu.src = "https://i.postimg.cc/cJRss6PP/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "https://i.postimg.cc/j5RRCtb2/menu.png";
  }
});
