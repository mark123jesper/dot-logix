"use strict";

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
} //FOR MENU BAR TOGGLE


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
});
//# sourceMappingURL=sidebar.dev.js.map
