// window.load(function(){

// })
//居中函数
function elementCenter(elements){
		elements.style.left=((getWindowSize().width-elements.offsetWidth)/2+getScrollSize().left)+"px";
		elements.style.top=((getWindowSize().height-elements.offsetHeight)/2+getScrollSize().top)+"px";
		//innerWidth,有兼容性的问题
}

function getWindowSize(){
	return{
		"width":window.innerWidth||document.documentElement.clientWidth,
		"height":window.innerHeight||document.documentElement.clientHeight
	}//使用object形式存取；
}
//--------------------------------------------------------------------
//获取滚动条滚动的值
function getScrollSize(){
	return{
		"top":document.documentElement.scrollTop||document.body.scrollTop,
		"left":document.documentElement.scrollLeft||document.body.scrollLeft
	}
}
//-----------------------------------------------
/**
始终保持num为两位数，如果num小于10则在num前面加0；


	*/
function addZero(num){
	if (num<10) {
		num="0"+num
	}else{
		num=num
	};
	return num;}
	////////////////邮箱验证//////////////////////
function valide_email(value){
	var pattern=/^[a-z0-9]+([\._-][a-z0-9]+)?@[a-z0-9]+([_-][0-9a-z]+)?\.[a-z]{2,11}(\.[a-z]{2,4})?$/i;
		if(pattern.test(value)){
			return true;
		}else{
			return false;
		}
}
/////////////////修剪数据前后的空格///////////////////
function trim(value){
			//如果value中全是空格
			if (/^(\s*)$/.test(value)) {
				value=value.replace(/^(\s*)$/,"")
			}else if (/^\s*(.+?)\s*$/.test(value)) {
				//如果value的前后都是空格
				value=value.replace(/^\s*(.+?)\s*$/,"$1")
			}
			return value;
		}
///////////////////判断输入数据是否符合要求(密码)///////////////////////
function valide_pwd(value){
	var num=0
	if(!/[\d]/.test(value)){
		num+=1;
	}
	if(!/[a-z]/.test(value)){
		num+=1;
	}
	if (!/[A-Z]/.test(value)) {
		num+=1;
	}
	if(!/[\w]/.test(value)){
		num+=1;
	}
	return num;
}
