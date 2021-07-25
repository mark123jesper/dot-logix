//FOR MENU BAR TOGGLE
function openNav() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width == '100%') {
        sidebar.style.width = '0';
        document.getElementById("custom-container").style.width = "0";
    } else {
        sidebar.style.width = '100%';
        document.getElementById("custom-container").style.width = "100%";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("custom-container").style.marginLeft = "0";
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
});

//FOR TEXT CHANGING
$(document).ready(function () {
    $("#expand, .closebtn").click(function () {
        $("#expand").fadeOut(function () {
            $("#expand").text(($("#expand").text() == 'Home Screen') ? 'Learn More' :
                'Home Screen').fadeIn();
        });
    });
});

// FOR ARTICLE ACCORDIONS
$(".item1").on("click", function () {
    $(".info1").addClass("active").removeClass("inactive");
    $(".info2,.info3,.info4,.info5").removeClass("active").addClass("inactive");
});

$(".item2").on("click", function () {
    $(".info2").addClass("active").removeClass("inactive");
    $(".info1,.info3,.info4,.info5").removeClass("active").addClass("inactive");
});

$(".item3").on("click", function () {
    $(".info3").addClass("active").removeClass("inactive");
    $(".info2,.info1,.info4,.info5").removeClass("active").addClass("inactive");
});

$(".item4").on("click", function () {
    $(".info4").addClass("active").removeClass("inactive");
    $(".info2,.info3,.info1,.info5").removeClass("active").addClass("inactive");
});

$(".item5").on("click", function () {
    $(".info5").addClass("active").removeClass("inactive");
    $(".info2,.info3,.info1,.info4").removeClass("active").addClass("inactive");
});

// PAGE LOADER FADE OUT
$(window).on("load", function () {
    console.log("load");
    $(".loader").delay(3000).fadeOut();
});

// VIDEO SLIDER AJAX
var swiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 0,
    autoplay: 6000,
    autoplayDisableOnInteraction: false,
});

$(".opennav, .closebtn").click(function (e) {
    $("#lab_video_text_overlay, .swiper-pagination, .swiper-button-next, .swiper-button-prev").toggleClass("hidden");
    e.stopPropagation();
});