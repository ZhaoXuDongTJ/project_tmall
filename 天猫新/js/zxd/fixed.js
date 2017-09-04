$(document).ready(function () {
    $("#fix-img-s01").hover(
        function () {
            $("#fix-img01").fadeIn(1000);
        },function () {
            $("#fix-img01").fadeOut(1000);
        }
    );

    $("#fix-img-s02").hover(
        function () {
            $("#spans-s1").fadeIn(1000);
        },function () {
            $("#spans-s1").fadeOut(1000);
        }
    );

    $("#fix-img-s03").hover(
        function () {
            // $("#spans-s2").css("display","block");
            $("#spans-s2").fadeIn(1000);

        },function () {
            // $("#spans-s2").css("display","none");
            $("#spans-s2").fadeOut(1000);
        }
    );
    


});


self.setInterval(function () {
    var rightNowa =  document.body.scrollTop;
    var alls =  window.screen.availHeight;
    
    if(rightNowa>alls){
        $("#top-nav").fadeIn(800);
    }else {
        $("#top-nav").fadeOut(1000);
    }
},100);