//FOR MENU BAR TOGGLE
function openNav() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width == '100%') {
        sidebar.style.width = '0';
        document.getElementById("container").style.width = "0";
    } else {
        sidebar.style.width = '100%';
        document.getElementById("container").style.width = "100%";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
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

// Video slider
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');

video1.onended = function () {
    video2.play();
    $("#video2,#content2,#next2,#prev2").addClass("shown").removeClass("hidden");
    $("#video1,#content1,#next1,#prev1,#video3,#content3,#next3,#prev3").removeClass("shown").addClass("hidden");
};

video2.onended = function () {
    video3.play();
    $("#video3,#content3,#next3,#prev3").addClass("shown").removeClass("hidden");
    $("#video1,#content1,#next1,#prev1,#video2,#content2,#next2,#prev2").removeClass("shown").addClass("hidden");
};

video3.onended = function () {
    video1.play();
    $("#video1,#content1,#next1,#prev1").addClass("shown").removeClass("hidden");
    $("#video3,#content3,#next3,#prev3,#video2,#content2,#next2,#prev2").removeClass("shown").addClass("hidden");
};

$("#next1").on("click", function () {
    video2.play();
    video1.pause();
    video1.currentTime = 0;
    $("#video2,#content2,#next2,#prev2").addClass("shown").removeClass("hidden");
    $("#video1,#content1,#next1,#prev1,#video3,#content3,#next3,#prev3").removeClass("shown").addClass("hidden");
});

$("#next2").on("click", function () {
    video3.play();
    video2.pause();
    video2.currentTime = 0;
    $("#video3,#content3,#next3,#prev3").addClass("shown").removeClass("hidden");
    $("#video1,#content1,#next1,#prev1,#video2,#content2,#next2,#prev2").removeClass("shown").addClass("hidden");
});

$("#next3").on("click", function () {
    video1.play();
    video3.pause();
    video3.currentTime = 0;
    $("#video1,#content1,#next1,#prev1").addClass("shown").removeClass("hidden");
    $("#video3,#content3,#next3,#prev3,#video2,#content2,#next2,#prev2").removeClass("shown").addClass("hidden");
});

$("#prev2").on("click", function () {
    video1.play();
    video2.pause();
    video2.currentTime = 0;
    $("#video1,#content1,#next1,#prev1").addClass("shown").removeClass("hidden");
    $("#video3,#content3,#next3,#prev3,#video2,#content2,#next2,#prev2").removeClass("shown").addClass("hidden");
});

$("#prev1").on("click", function () {
    video3.play();
    video1.pause();
    video1.currentTime = 0;
    $("#video3,#content3,#next3,#prev3").addClass("shown").removeClass("hidden");
    $("#video1,#content1,#next1,#prev1,#video2,#content2,#next2,#prev2").removeClass("shown").addClass("hidden");
});

$("#prev3").on("click", function () {
    video2.play();
    video3.pause();
    video3.currentTime = 0;
    $("#video2,#content2,#next2,#prev2").addClass("shown").removeClass("hidden");
    $("#video1,#content1,#next1,#prev1,#video3,#content3,#next3,#prev3").removeClass("shown").addClass("hidden");
});


