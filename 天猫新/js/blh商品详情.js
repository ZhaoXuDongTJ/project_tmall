$(document).ready(function(e){
				//
				$("#intwoH2").mouseover(function(e){
					$("#XLshop").css("display","block");
				})
				$("#XLshop").mouseover(function(e){
					$("#XLshop").css("display","block");
				})
				
				//
				$("#intwoH2").mouseout(function(e){
					$("#XLshop").css("display","none");
				})
				
				$("#XLshop").mouseout(function(e){
					$("#XLshop").css("display","none");
				})
				
				
				
				//
				$("#intwoH3").mouseover(function(e){
					$("#XLcode").css("display","block");
				})
				$("#XLcode").mouseover(function(e){
					$("#XLcode").css("display","block");
				})
				//
				$("#intwoH3").mouseout(function(e){
					$("#XLcode").css("display","none");
				})
				$("#XLcode").mouseout(function(e){
					$("#XLcode").css("display","none");
				})
				
				
				/////////////轮播
					//1.
				$("#lunbo1kongzhi1").mouseover(function(e){
					$("#lunbo1").css("display","block");
				})
			
				$("#lunbo1kongzhi1").mouseout(function(e){
					$("#lunbo2").css("display","none");
				})
				$("#lunbo1kongzhi1").mouseout(function(e){
					$("#lunbo3").css("display","none");
				})
				$("#lunbo1kongzhi1").mouseout(function(e){
					$("#lunbo4").css("display","none");
				})
				$("#lunbo1kongzhi1").mouseout(function(e){
					$("#lunbo5").css("display","none");
				})
				///2
				
				$("#lunbo1kongzhi2").mouseover(function(e){
					$("#lunbo2").css("display","block");
				})
				
				$("#lunbo1kongzhi2").mouseout(function(e){
					$("#lunbo1").css("display","none");
				})
				$("#lunbo1kongzhi2").mouseout(function(e){
					$("#lunbo3").css("display","none");
				})
				$("#lunbo1kongzhi2").mouseout(function(e){
					$("#lunbo4").css("display","none");
				})
				$("#lunbo1kongzhi2").mouseout(function(e){
					$("#lunbo5").css("display","none");
				})
				//3.
				$("#lunbo1kongzhi3").mouseover(function(e){
					$("#lunbo3").css("display","block");
				})
				
				
				$("#lunbo1kongzhi3").mouseout(function(e){
					$("#lunbo1").css("display","none");
				})
				
				$("#lunbo1kongzhi3").mouseout(function(e){
					$("#lunbo2").css("display","none");
				})
				$("#lunbo1kongzhi3").mouseout(function(e){
					$("#lunbo4").css("display","none");
				})
				$("#lunbo1kongzhi3").mouseout(function(e){
					$("#lunbo5").css("display","none");
				})
				
				
				
				///4.
				$("#lunbo1kongzhi4").mouseover(function(e){
					$("#lunbo4").css("display","block");
				})
				
				$("#lunbo1kongzhi4").mouseout(function(e){
					$("#lunbo1").css("display","none");
				})
				$("#lunbo1kongzhi4").mouseout(function(e){
					$("#lunbo2").css("display","none");
				})
				$("#lunbo1kongzhi4").mouseout(function(e){
					$("#lunbo3").css("display","none");
				})
				$("#lunbo1kongzhi4").mouseout(function(e){
					$("#lunbo5").css("display","none");
				})
				//5.
				$("#lunbo1kongzhi5").mouseover(function(e){
					$("#lunbo5").css("display","block");
				})
				
				$("#lunbo1kongzhi5").mouseout(function(e){
					$("#lunbo1").css("display","none");
				})
				$("#lunbo1kongzhi5").mouseout(function(e){
					$("#lunbo2").css("display","none");
				})
				$("#lunbo1kongzhi5").mouseout(function(e){
					$("#lunbo3").css("display","none");
				})
				$("#lunbo1kongzhi5").mouseout(function(e){
					$("#lunbo4").css("display","none");
				})
				
			})

$(document).ready(function(e){
				//步骤1
				$("#c1right2").click(function(){
					//步骤2
					$("#c1right2link").toggle();
					
				});
				$("#addresstop").click(function(){
					//步骤2
					$("#addresslink").toggle();
					
				});
				
			});
			
function addNum(){
				//1、获取当前的数量
				var num = document.getElementById("num").value;
				//2、数量加1
				num++;
				//3、数量更新
				document.getElementById("num").value = num;
				var allPrice1 = num * 255.40;
				document.getElementById("allPrice1").value = allPrice1;
				var allPrice2 = num * 130.44;
				document.getElementById("allPrice2").value = allPrice2;
				var allPrice3 = num * 67.09;
				document.getElementById("allPrice3").value = allPrice3;
				
			}

function jianNum(){
				//1、获取当前的数量
				var num2 = document.getElementById("num").value;
				//2、数量减1
				num2--;
				//3、数量更新
				document.getElementById("num").value = num2;
				
			
			}



self.setInterval(function () {
    var rightNowa =  document.body.scrollTop;
    var branch2 = $("fourM").offset().top;
    if(rightNowa>branch2){
        $("#fourM").css({
            position:"fixed",
            top:"0",
            backgroundColor:"white"
        });
    }else {
        $("fourM").css({
            position:""
        });
    }
},100);

self.setInterval(function () {
    var rightNowa =  document.body.scrollTop;
    var branch2 = $("inthreeM1").offset().top;
    if(rightNowa>branch2){
        $("#inthreeM1").css({
            position:"fixed",
            top:"0",
            backgroundColor:"white"
        });
    }else {
        $("inthreeM1").css({
            position:""
        });
    }
},100);

