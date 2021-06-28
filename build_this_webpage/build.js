window.onscroll = function() {myFunction()};

var navbar = document.getElementById("head");
var sticky = navbar.offsetTop;
var nav = document.getElementById("navigation");

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    nav.classList.add("padding")
  } else {
    navbar.classList.remove("sticky");
    nav.classList.remove("padding")
  }
}