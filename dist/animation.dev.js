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

$(".btn").on("click", function () {
  $(".menu").toggleClass("show");
});
$(".btn").click(function (e) {
  $(".menu").show();
  e.stopPropagation();
});
$(".menu").click(function (e) {
  e.stopPropagation();
});
$(document).click(function (e) {
  $(".menu").removeClass("show");
  e.stopPropagation();
}); //FOR TEXT CHANGING

$(document).ready(function () {
  $("#expand, .closebtn").click(function () {
    $("#expand").fadeOut(function () {
      $("#expand").text($("#expand").text() == 'Home Screen' ? 'See Less' : 'Home Screen').fadeIn();
    });
  });
}); //FOR MOUSE PARALLAX
// (function () {
//     // Add event listener
//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector("#parallax1");
//     // Magic happens here
//     function parallax(e) {
//         let _w = window.innerWidth / 2;
//         let _h = window.innerHeight / 2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${10 + (_mouseX - _w) * 0.01}% ${10 + (_mouseY - _h) * 0.01}%`;
//         let _depth2 = `${10 + (_mouseX - _w) * 0.02}% ${10 + (_mouseY - _h) * 0.02}%`;
//         let _depth3 = `${10 + (_mouseX - _w) * 0.06}% ${10 + (_mouseY - _h) * 0.06}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }
// })();
//# sourceMappingURL=animation.dev.js.map
