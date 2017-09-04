$(document).ready(function () {
    $("#search").focus(function () {
        $("#label-search").css("visibility","hidden");
    });
    $("#search").blur(function () {
        $("#label-search").css("visibility","visible");
    });
});
