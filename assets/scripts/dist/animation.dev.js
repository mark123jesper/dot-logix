"use strict";

//FOR MENU BAR TOGGLE
function openNav() {
  var e = document.getElementById("mySidebar");

  if (e.style.width == '100%') {
    e.style.width = '0px';
    document.getElementById("main").style.marginRight = "0";
  } else {
    e.style.width = '100%';
    document.getElementById("main").style.marginRight = "100";
  }
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

$(".btn").click(function (e) {
  $(".menu").toggleClass("show");
  e.stopPropagation();
});
$(".menu").click(function (e) {
  e.stopPropagation();
});
$(document).click(function (e) {
  $(".menu").removeClass("show");
  e.stopPropagation();
});
$(".btn").on("click", function togglemenu() {
  $(".top").toggleClass("forward");
});
$(document).click(function (e) {
  $(".top").removeClass("forward");
  e.stopPropagation();
});
$(".btn").on("click", function togglemenu() {
  $(".middle").toggleClass("disappear");
});
$(document).click(function (e) {
  $(".middle").removeClass("disappear");
  e.stopPropagation();
});
$(".btn").on("click", function togglemenu() {
  $(".bottom").toggleClass("backward");
});
$(document).click(function (e) {
  $(".bottom").removeClass("backward");
  e.stopPropagation();
}); //FOR TEXT CHANGING

$(document).ready(function () {
  $("#expand, .closebtn").click(function () {
    $("#expand").fadeOut(function () {
      $("#expand").text($("#expand").text() == 'Home Screen' ? 'See More' : 'Home Screen').fadeIn();
    });
  });
}); //FOR MOUSE PARALLAX

(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  var elem = document.querySelector("#myVideo"); // Magic happens here

  function parallax(e) {
    var _w = window.innerWidth / 2;

    var _h = window.innerHeight / 2;

    var _mouseX = e.clientX;
    var _mouseY = e.clientY;

    var _depth1 = "".concat(10 + (_mouseX - _w) * 0.01, "% ").concat(10 + (_mouseY - _h) * 0.01, "%");

    var _depth2 = "".concat(10 + (_mouseX - _w) * 0.02, "% ").concat(10 + (_mouseY - _h) * 0.02, "%");

    var _depth3 = "".concat(10 + (_mouseX - _w) * 0.06, "% ").concat(10 + (_mouseY - _h) * 0.06, "%");

    var x = "".concat(_depth3, ", ").concat(_depth2, ", ").concat(_depth1);
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})(); // Show Info On Click
// $('.item').click(function () {
//     $(this).addClass("active").siblings('.item').removeClass('active');
// });


$(".item1").on("click", function () {
  $(".info1").toggleClass("active").removeClass("inactive");
  $(".info2,.info3,.info4").removeClass("active").addClass("inactive");
});
$(".item2").on("click", function () {
  $(".info2").toggleClass("active").removeClass("inactive");
  $(".info1,.info3,.info4").removeClass("active").addClass("inactive");
});
$(".item3").on("click", function () {
  $(".info3").toggleClass("active").removeClass("inactive");
  $(".info2,.info1,.info4").removeClass("active").addClass("inactive");
});
$(".item4").on("click", function () {
  $(".info4").toggleClass("active").removeClass("inactive");
  $(".info2,.info3,.info1").removeClass("active").addClass("inactive");
});
//# sourceMappingURL=animation.dev.js.map
