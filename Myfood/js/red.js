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
		if(trim(this.value).length==0){
			emailShow.innerHTML="邮箱不能为空";
			emailShow.style.color="red";
			errorMsg="邮箱不能为空";
		}else if(valide_email(trim(this.value))){
			emailShow.innerHTML="邮箱可使用";
			emailShow.style.color="green";
			errorMsg="";
		}else{
			emailShow.innerHTML="邮箱格式不正确";
			errorMsg="邮箱格式不正确";
		}
	})
	//用户名Ajax
	username.addEventListener("blur",function(){
		
	})
	
	//密码验证
	pwd.addEventListener("keyup",function(){		
		switch(valide_pwd(trim(this.value))){
			case 3:
				pwdShow.innerHTML="密码强度弱";
				pwdShow.style.color="red";
				errorMsg="密码强度弱";
				break;
			case 2:
				pwdShow.innerHTML="密码强度中";
				pwdShow.style.color="orange";
				errorMsg="密码强度较中"
				break;
			case 1:
				pwdShow.innerHTML="密码强度较强";
				pwdShow.style.color="seagreen";
				errorMsg="密码强度较弱"
				break;
			case 0:
				pwdShow.innerHTML="密码强度高";
				pwdShow.style.color="green";
				errorMsg="密码强度高"
				break;
		}
	})
	repwd.addEventListener("keyup",function(){
		console.log(this.value)
		if(trim(this.value)==trim(pwd.value)){
			repwdShow.innerHTML="密码强度高";
			repwdShow.style.color="green"
			errorMsg="";
		}else{
			repwdShow.innerHTML="与上次密码输入不一致";
			repwdShow.style.color="red"
			errorMsg="与上次密码输入不一致";
		}
	})
	// Btn 验证
	regBtn.addEventListener("click",function(){
		if(trim(email.value).length==0){
			emailShow.innerHTML="邮箱不能为空";
			emailShow.style.color="red";
			errorMsg="邮箱不能为空";
			return false;
		}else if(trim(username.value).length==0){
			usernameShow.innerHTML="用户名不能为空";
			usernameShow.style.color="red";
			errorMsg="用户名不能为空";
			return false;
		}else if(trim(pwd.value).length==0){
			pwdShow.innerHTML="密码不能为空";
			pwdShow.style.color="red";	
			errorMsg="密码不能为空";
			return false;
		}else if(trim(repwd.value).length==0){
			repwdShow.innerHTML="确认密码不能为空";
			repwdShow.style.color="red";
			errorMsg="确认密码不能为空";
		}
		if(errorMsg){
			console.log(errorMsg)
			emailShow.innerHTML=errorMsg;
			usernameShow.innerHTML=errorMsg;
			pwdShow.innerHTML=errorMsg;
			repwdShow.innerHTML=errorMsg;
			return false;
		}else{
			sessionStorage.setItem("username",username.value)
			location.href="login.html"
		}
	})
/*----------------window load end----------------------*/
})
