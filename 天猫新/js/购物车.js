function checkAll(){
	var checkboxs = document.getElementsByName("check");
	for(var i =0;i<checkboxs.length;i++){
		var e =checkboxs[i];
		e.checked = !e.checked;
	}
}
function jianNuma(){
	var num2 = document.getElementById("num-1").value;
				//2、数量减1
				num2--;
				//3、数量更新
				document.getElementById("num-1").value = num2;
				document.getElementById("num-11").value = num2*649;
}
function addNuma(){
		//1、获取当前的数量
				var num = document.getElementById("num-1").value;
				//2、数量加1
				num++;
				//3、数量更新
				document.getElementById("num-1").value = num;
					document.getElementById("num-11").value = num*649;
				
}

function jianNumb(){
	var num2 = document.getElementById("num-2").value;
				//2、数量减1
				num2--;
				//3、数量更新
				document.getElementById("num-2").value = num2;
					document.getElementById("num-22").value = num2*749;
}

function addNumb(){
		//1、获取当前的数量
				var num = document.getElementById("num-2").value;
				//2、数量加1
				num++;
				//3、数量更新
				document.getElementById("num-2").value = num;
				document.getElementById("num-22").value = num*749;
				
}

function jiesuan(){
	
	document.getElementById("num-33").value = parseInt(document.getElementById("num-11").value) + parseInt(document.getElementById("num-22").value);
}



function shangchu(){
	
	$("#main4-3").remove();
}
