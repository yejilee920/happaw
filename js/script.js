
$('.slide_box> li').mouseenter(
    function () {
        $(this).css({ 'width': '290px', 'height': '310px','transform': 'translateY(0px)'});
        $(this).children("ul").css({ 'padding-left': '30px','width': '290px','box-sizing':'border-box','transform': 'translateX(0px)' });
    }
);
$('.slide_box> li').mouseleave(
    function () {
        $(this).css({ 'width': '230px', 'height': '250px' ,'transform': 'translateY(0px)'});
        $(this).children("ul").css({ 'width': '230px','padding-left': '-10px'});
    }
);
$('.slide_box> li> ul').mouseenter(
    function () {
        $(this).css({'transform': 'translateX(-10px)'});
    }
);
$('.slide_box> li> ul').mouseleave(
    function () {
        $(this).css({'transform': 'translateX(0px)'});
    }
);

$('.info1').hide(0);
$(".box1").mouseenter(function () {
    $(".info1").show();
})
$(".box1").mouseleave(function () {
    $(".info1").hide();
})
$('.info2').hide(0);
$(".box2").mouseenter(function () {
    $(".info2").show();
})
$(".box2").mouseleave(function () {
    $(".info2").hide();
})

$('.info3').hide(0);
$(".box3").mouseenter(function () {
    $(".info3").show();
})
$(".box3").mouseleave(function () {
    $(".info3").hide();
})

$('.info4').hide(0);
$(".box4").mouseenter(function () {
    $(".info4").show();
})
$(".box4").mouseleave(function () {
    $(".info4").hide();
})

$('.info5').hide(0);
$(".box5").mouseenter(function () {
    $(".info5").show();
})
$(".box5").mouseleave(function () {
    $(".info5").hide();
});
