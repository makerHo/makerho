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
/**----------------------------------------------*/
})