window.addEventListener("load",function(){
	//背景图自动切换
//	var section = document.querySelector(".section");
//		console.log(section)
//		console.log(section.style.background)
/**--------------登录验证-------------------*/
var email = document.querySelector(".email");
var emailShow = document.querySelector(".emailShow");
var username = document.querySelector(".username");
var usernameShow = document.querySelector(".usernameShow");
var pwd = document.querySelector(".pwd");
var pwdShow = document.querySelector(".pwdShow");
var repwd = document.querySelector(".repwd");
var repwdShow = document.querySelector(".repwdShow");
var regBtn = document.querySelector(".regBtn");
var yzmIpt = document.querySelector(".yzmIpt");
var xhr = new XMLHttpRequest();
var errorMsg=null;
			
	//邮箱验证
	email.addEventListener("keyup",function(){
		if(trim(email.value).length==0){
			emailShow.innerHTML="邮箱不能为空";
			errorMsg="邮箱不能为空";
		}else{
			emailShow.innerHTML="";
			errorMsg="";
		}
	})
/*----------------window load end----------------------*/
})
