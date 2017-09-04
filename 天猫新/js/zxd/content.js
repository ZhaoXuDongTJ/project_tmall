

var mainName = document.getElementById("c-carousel");
var tagName = mainName.getElementsByTagName("li");
// alert(tagName.length);
var col;
function jQColor(e) {
    // alert("dd");
    var flag = e % 3;
    col = tagName[e-1].style.color;
    // alert(flag);
    if(flag == 0 ){
        tagName[e-1].style.color = "#FA5C5C";
    }else if(flag== 1){
        tagName[e-1].style.color = "#7B63ef";
    }else if(flag == 2){
        tagName[e-1].style.color = "#f7a831";
    }
};
function jQColors(e) {
    tagName[e-1].style.color = col;
}

var imgURL =["#E8E8E8",
             "#E8E8E8",
             "#020403",
             "#03FB9B",
             "#36353A",
             "#FADA5F"];
var divADivName = document.getElementById("c-carouse2");
var aName = divADivName.getElementsByTagName("a");
var bg_color = document.getElementsByClassName("content-out-carousel");
function carousel1(e) {
    for(var i=0;i<aName.length;i++){
        aName[i].style.display = "none";
    }

    aName[e-1].style.display = "block";
    bg_color[0].style.backgroundColor=imgURL[e-1];
}
var flag1=1;
self.setInterval(function () {
   carousel1(flag1++);
   if(flag1==6){
       flag1=1;
   }
},4000);

var lives_list = document.getElementById("lives-list");
var lives_img = lives_list.getElementsByTagName("img");

var flag2 = 0;
var flag3;
self.setInterval(function () {
     flag3 = flag2++ % 2;
    if(flag3 ==1){
         $(lives_img[0]).slideUp(1000);
         $(lives_img[1]).slideUp(1000);
         $(lives_img[2]).slideUp(1000);
        $(lives_img[3]).slideDown(1000);
        $(lives_img[4]).slideDown(1000);
        $(lives_img[5]).slideDown(1000);
    }else {
        $(lives_img[0]).slideDown(1000);
        $(lives_img[1]).slideDown(1000);
        $(lives_img[2]).slideDown(1000);
        $(lives_img[3]).slideUp(1000);
        $(lives_img[4]).slideUp(1000);
        $(lives_img[5]).slideUp(1000);
    }
},2000);

// self.setInterval(function () {
//     if(flag3!=1){
//         $(lives_img[3]).slideDown(1000);
//         $(lives_img[4]).slideDown(1000);
//         $(lives_img[5]).slideDown(1000);
//     }else {
//         $(lives_img[3]).slideUp(1000);
//         $(lives_img[4]).slideUp(1000);
//         $(lives_img[5]).slideUp(1000);
//     }
// },2000);




var livesListImg =document.getElementById("impro-img").getElementsByTagName("img");
// alert(livesListImg.length);
var flag4 =0;

self.setInterval(function () {
    for(var i=0;i<livesListImg.length;i++){
        livesListImg[i].style.display="none";
    }
    livesListImg[flag4].style.display="inline";
    flag4++;
    if(flag4 == 5){
        flag4 = 0;
    }
},4000);





















