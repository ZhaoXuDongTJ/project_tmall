$(document).ready(function () {
    var flag = 0;
    $("#c-up").click(function () {
        if(flag%2 == 0){
            $("#c-up-word").text("收起")  ;
            $("#c-up-img").css("transform","rotate(180deg)");
            $(".li-xuan").css("display","block");
            $(".brand1").css("height","100px");
        }else {
            $("#c-up-word").text("展开")  ;
            $("#c-up-img").css("transform","rotate(0deg)");
            $(".li-xuan").css("display","none");
            $(".brand1").css("height","40px");
        }
        flag++;
    });


});

$(document).ready(function () {
    var flag2 = 0;
    $("#box4-right-button").click(function () {
        if(flag2 % 2 == 0){
            $("#box4-right-span1").text("收起")  ;
            $("#box4-right-img1").css("transform","rotate(180deg)");
            $(".box4-left-li2").css("display","block");
            // $(".brand2 .box4 .left").css("height","100px");
        }else {
            $("#box4-right-span1").text("展开")  ;
            $("#box4-right-img1").css("transform","rotate(0deg)");
            $(".box4-left-li2").css("display","none");
            // $(".brand2 .box4 .left").css("height","40px");
        }
        flag2++;
    });
});
$("#box3-ul-txt-1").click(function () {
    $("#fixed-nav .box3").css("height","55px");
    $(".box3-ul-button li button").css("display","block");
});
// $("#box3-ul-txt-1").blur(function () {
//     $("#fixed-nav .box3").css("height","26px");
//     $(".box3-ul-button li button").css("display","none");
// });
$("#box3-ul-txt-2").click(function () {
    $("#fixed-nav .box3").css("height","55px");
    $(".box3-ul-button li button").css("display","block");
});
// $("#box3-ul-txt-2").blur(function () {
//     $("#fixed-nav .box3").css("height","26px");
//     $(".box3-ul-button li button").css("display","none");
// });
$("#box3-ul-button-1").click(function () {
    var txt = $("#box3-ul-txt-1").val();
    var txt2 = $("#box3-ul-txt-2").val();
    $("#box3-ul-txt-1").val("￥"+txt);
    $("#box3-ul-txt-2").val("￥"+txt2);
    $("#fixed-nav .box3").css("height","26px");
    $(".box3-ul-button li button").css("display","none");
});
$("#box3-ul-button-2").click(function () {
    $("#box3-ul-txt-1").val("");
    $("#box3-ul-txt-2").val("");
    $("#fixed-nav .box3").css("height","26px");
    $(".box3-ul-button li button").css("display","none");
});


//
var yuan =  $("#box5-li-1 .box5-span1").css("color");
$("#box5-li-1").click(function () {

    var h = $(".box5-img-1");
    for(var i=0;i<h.length;i++){
        $(h[i]).css("display","inline");
    }
    var h2 = $(".box5-img-2");
    for(var i=0;i<h2.length;i++){
        $(h2[i]).css("display","none");
    }

    var h3 = $(".box5-span1");
    for(var i =0;i<h3.length;i++){
        $(h3[i]).css("color",yuan);
    }

    $("#box5-li-1 .box5-img-2").css("display","inline");
    $("#box5-li-1 .box5-img-1").css("display","none");
    $("#box5-li-1 .box5-span1").css("color","red");
});
$("#box5-li-2").click(function () {
    var h = $(".box5-img-1");
    for(var i=0;i<h.length;i++){
        $(h[i]).css("display","inline");
    }
    var h2 = $(".box5-img-2");
    for(var i=0;i<h2.length;i++){
        $(h2[i]).css("display","none");
    }

    var h3 = $(".box5-span1");
    for(var i =0;i<h3.length;i++){
        $(h3[i]).css("color",yuan);
    }
    $("#box5-li-2 .box5-img-2").css("display","inline");
    $("#box5-li-2 .box5-img-1").css("display","none");
    $("#box5-li-2 .box5-span1").css("color","red");
});
$("#box5-li-3").click(function () {
    var h = $(".box5-img-1");
    for(var i=0;i<h.length;i++){
        $(h[i]).css("display","inline");
    }
    var h2 = $(".box5-img-2");
    for(var i=0;i<h2.length;i++){
        $(h2[i]).css("display","none");
    }

    var h3 = $(".box5-span1");
    for(var i =0;i<h3.length;i++){
        $(h3[i]).css("color",yuan);
    }
    $("#box5-li-3 .box5-img-2").css("display","inline");
    $("#box5-li-3 .box5-img-1").css("display","none");
    $("#box5-li-3 .box5-span1").css("color","red");
});

self.setInterval(function () {
    var rightNowa =  document.body.scrollTop;
    var branch2 = $(".brand2").offset().top;

    if(rightNowa>branch2){
        $("#fixed-nav").css({
            position:"fixed",
            top:"0",
            backgroundColor:"white"
        });
    }else {
        $("#fixed-nav").css({
            position:"relative"
        });
    }
},100);

$("#shops-pic-l3-img2").mouseover(function () {
    $("#shops-pic-l3-img1").css("display","none");
    $("#shops-pic-l3-img1-1").css("display","none");
    $("#shops-pic-l3-img1-2").css("display","none");
    $("#shops-pic-l3-img1").css("display","block");
});
$("#shops-pic-l3-img2-1").mouseover(function () {
    $("#shops-pic-l3-img1").css("display","none");
    $("#shops-pic-l3-img1-1").css("display","none");
    $("#shops-pic-l3-img1-2").css("display","none");
    $("#shops-pic-l3-img1-1").css("display","block");
});
$("#shops-pic-l3-img2-2").mouseover(function () {
    $("#shops-pic-l3-img1").css("display","none");
    $("#shops-pic-l3-img1-1").css("display","none");
    $("#shops-pic-l3-img1-2").css("display","none");
    $("#shops-pic-l3-img1-2").css("display","block");
});





























