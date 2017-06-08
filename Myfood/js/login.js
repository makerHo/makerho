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
var pwd=document.querySelector(".pwd");
var loginBtn=document.querySelector(".loginBtn");
var xhr=new XMLHttpRequest();
	loginBtn.addEventListener("click",function(){
		xhr.open("post","member.txt")
		xhr.send(null);
		xhr.addEventerListener("readyStatechange",function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					

				}
			}
		})
	})
/**----------------------------------------------*/
})