

$(function(){
				//步骤1：先给a标签加上单击事件
				$("#tubiaoC").click(function(){
					//步骤2：让当前点击的层显示，另一个隐藏
					$("#code").css("display","block");
					$("#zhanghao").css("display","none");
					$("#tubiaoC").css("display","none");
					$("#tubiaoZ").css("display","block");
					$("#tishi").css("display","none");
				});
				$("#tubiaoZ").click(function(){
					$("#zhanghao").css("display","block");
					$("#code").css("display","none");
					$("#tubiaoZ").css("display","none");
					$("#tubiaoC").css("display","block");
					$("#tishi").css("display","block");
				});
				$(".pass").click(function(){
					$("#zhanghao").css("display","block");
					$("#code").css("display","none");
					$("#tubiaoZ").css("display","none");
					$("#tubiaoC").css("display","block");
					$("#tishi").css("display","block");
				});
			});
			


function textUserName(){
				//步骤1：取值
				var userName = document.getElementById("username").value.trim();//trim()方法，去掉字符串两端空格
				//步骤2：判断是否为空
				if(userName ==""){
					document.getElementById("span1").innerHTML = "用户名不能为空!";
				}else{
					document.getElementById("span1").innerHTML = "";
				}
			}
			function testPSW(){
				//步骤1：取值
				var psww = document.getElementById("psw").value.trim();//trim()方法，去掉字符串两端空格
				//步骤2：判断是否小于6位
				if(psww.length<6&&psww.length>0){
					document.getElementById("span2").innerHTML = "  <br/> 密码不能小于6位！";
				}else if(psww.length==0){
					document.getElementById("span2").innerHTML = " <br/> 密码不能为空！";
				 
				}
				 else	
				 document.getElementById("span2").innerHTML = " ";
			}