window.addEventListener("load",function(){
	//body   背景图随机切换
var bodyImg = document.querySelector(".bodyImg")
var timers = setInterval(function(){
	var bodyImgRandom=Math.ceil(Math.random()*3);
		bodyImg.src="img/login/"+bodyImgRandom+".jpg"
},3000)
	
//secMidBox center
var secMidBox = document.querySelector(".secMidBox");
elementCenter(secMidBox);
//ragister Tab
var secMidBoxToplis = document.querySelectorAll(".secMidBoxTop li");
var secMidBoxBtmlis = document.querySelectorAll(".secMidBoxBtm>ul>li");
	secMidBoxToplis.forEach(function(value,index){
		value.addEventListener("click",function(){
			secMidBoxToplis.forEach(function(v,i){
				v.className="";
				secMidBoxBtmlis[i].className="";
			});
			value.className="secMidBoxTopLisClick";
			secMidBoxBtmlis[index].className="regDisplay";
		});
	});
	
//login页面登录验证
var username=document.querySelector(".username");
var feedback = document.querySelector(".feedback")
var pwd=document.querySelector(".pwd");
var loginBtn=document.querySelector(".loginBtn");
var errorMsg=null;
 loginBtn.addEventListener("click",function(){
 	if(trim(username.value).length==0){
 		feedback.innerHTML="用户名不能为空";
 		errorMsg="用户名不能为空";
 		return false;
 	}else if(trim(pwd.value)==0){
 		feedback.innerHTML="密码不能为空";
 		errorMsg="密码不能为空";	
 		return false;
 	}else if(errorMsg){
 		feedback.innerHTML=errorMsg;
 	}else{
 		sessionStorage.setItem("username",username.value);
 		location.href="index.html"
 	}
 })
	
/**----------------------------------------------*/
})