$(document).ready(function () {
    $("#AgreementBtn").click(function () {
        $("#a-agree").remove();
        $("#b-mobile").css("display","block") ;
    });
});


var flags= false;
var mobileNumber;
// 手机 滑块
(function($){
    $.fn.drag = function(options){
        var x, drag = this, isMove = false, defaults = {
        };
        var options = $.extend(defaults, options);
        //添加背景，文字，滑块
        var html = '<div class="drag_bg"></div>'+
            '<div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div>'+
            '<div class="handler handler_bg"></div>';
        this.append(html);

        var handler = drag.find('.handler');
        var drag_bg = drag.find('.drag_bg');
        var text = drag.find('.drag_text');
        var maxWidth = drag.width() - handler.width();  //能滑动的最大间距

        //鼠标按下时候的x轴的位置
        handler.mousedown(function(e){
            isMove = true;
            x = e.pageX - parseInt(handler.css('left'), 10);
        });

        //鼠标指针在上下文移动时，移动距离大于0小于最大间距，滑块x轴位置等于鼠标移动距离
        $(document).mousemove(function(e){
            var _x = e.pageX - x;
            if(isMove){
                if(_x > 0 && _x <= maxWidth){
                    handler.css({'left': _x});
                    drag_bg.css({'width': _x});
                }else if(_x > maxWidth){  //鼠标指针移动距离达到最大时清空事件
                    dragOk();
                }
            }
        }).mouseup(function(e){
            isMove = false;
            var _x = e.pageX - x;
            if(_x < maxWidth){ //鼠标松开时，如果没有达到最大距离位置，滑块就返回初始位置
                handler.css({'left': 0});
                drag_bg.css({'width': 0});
            }
        });

        //清空事件
        function dragOk(){
            handler.removeClass('handler_bg').addClass('handler_ok_bg');
            text.text('验证通过');
            flags = true;
            drag.css({'color': '#fff'});
            handler.unbind('mousedown');
            $(document).unbind('mousemove');
            $(document).unbind('mouseup');
        }
    };
})(jQuery);

$('#drag').drag();

var txt;
$("#b-mobile-input").blur(function () {
    txt = $("#b-mobile-input").val();
    setCookie('username',txt,365);
//  g-txt-username = txt;
    if(txt == ""){
        $("#b-mobile-input-span").text("请输入你的手机号");
    }else {
        $("#b-mobile-input-span").text("");
    }

    if(txt.length==11 && flags){
       $("#b-mobile-button").css({
           backgroundColor:"red"
       });
    }
});

var biao =false;
$("#b-mobile-button").click(function () {
    // mobileNumber = $("#b-mobile-input").val();
    $("#b-mobile").remove();
    biao =true;
    $("#b-mobile-input-span2").text(txt);
    $("#c-mobile").css("display","block");
});

var num =60;
self.setInterval(function () {
     if(biao&&num>0){
         $("#b-mobile-button2").val("还有"+num);
         num--;
     }
},1000);

$("#c-mobile-button").click(function () {
    $("#c-mobile").css("display","none");
    $("#d-money").css("display","block");
});


$("#d-money-pw1").blur(function () {
    if($(this).val() == ""){
        $("#d-mobile-input-span1").text("无输入");
    }else {
        $("#d-mobile-input-span1").text("");
    }
});
$("#d-money-pw2").blur(function () {
    if($(this).val() == ""|| $("#d-money-pw1").val()!=$(this).val()){
        $("#d-mobile-input-span2").text("Error");
    }else {
        $("#d-mobile-input-span2").text("");
    }
});
$("#d-money-button").click(function () {
    $("#d-money").css("display","none");
    $("#OK").css("display","block");
    $("#OK-h1").text(txt);
});





//window.onload(function(){
//	 if(txt != "" ){
//	    $("#g-li-log").text(g-txt-username);
//	    $("#g-li-log2").text("");
//  }
//});


function getCookie(c_name)
{
if (document.cookie.length>0)
{ 
	c_start=document.cookie.indexOf(c_name + "=");
	if (c_start!=-1)
	{ 
		c_start=c_start + c_name.length+1; 
		c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length
				return unescape(document.cookie.substring(c_start,c_end));
	} 
}
return "";
}

function setCookie(c_name,value,expiredays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}

function checkCookie()
{
 username=getCookie('username');
if (username!=null && username!="")
  {
  	$("#g-log-a-1").text(username);
  	$("#g-log-a-2").text("");
  	
  }
else 
  {
  	username=txt;
  if (username!=null && username!="")
    {
       setCookie('username',username,365);
    }
  }
}








