window.addEventListener("load",function(){
	var nav = document.querySelector(".nav");	
	//scroll 是window的事件
	window.addEventListener("scroll",function(){
		var scrollTop=getScrollSize().top;
		if(scrollTop>40){
			console.log(scrollTop)
			nav.className="navfixed";
		}else{
			nav.className="nav";
		}

	})	

/*--------banner loop-------------*/
var imgObjs= document.querySelector(".barImgs img");
var barImgs = document.querySelector(".barImgs")
var banImgLis= document.querySelectorAll(".banImgLi li");
//	console.log(banImgLis)
	autoplay(1);
	function autoplay(index){
		timer=setInterval(function(){
			barImgs.style.left=-imgObjs.offsetWidth*index+"px";
				for(var i=0;i<banImgLis.length;i++){
					banImgLis[i].className="";
				}
				banImgLis[index].className="spotlight";
				index++;
				if(index==banImgLis.length){
					index=0
				}
		},3000)
	}
/** banner下Tab页*/	
	var barLis=document.querySelectorAll(".barMeLeft li");
	var barDivs = document.querySelectorAll(".barMeRight div");
//	console.log(barDivs)
		barLis.forEach(function(value,index){
			value.addEventListener("mouseover",function(){
				barLis.forEach(function(v,i){
					v.className="";
					barDivs[i].className="";
				})
				value.className="barLeftLi";
				barDivs[index].className="barRitdiv"
				//鼠标移除后 隐藏
					barLis.forEach(function(value,index){
					value.addEventListener("mouseout",function(){
						value.className="";
						barDivs[index].className="";
					})	
				})	
			})	
			
			
		})	
 /**----------------------------------- window end--------------------------------*/ 
})