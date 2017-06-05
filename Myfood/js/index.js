window.addEventListener("load",function(){
	//nav top
	var nav = document.querySelector(".nav");
//	console.log(nav)
	var scrollTop=getScrollSize().top;
//		console.log(scrollTop)
	//scroll 是window的事件
	window.addEventListener("scroll",function(){
		if(scrollTop>56){
			nav.className="";
		}else{
			nav.className="navfixed";
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
//				console.log(i)
				banImgLis[index].className="spotlight";
				index++;
				if(index==banImgLis.length){
					index=0
				}
		},3000)
	}
	
	
	
	
	
 /**----------------------------------- window end--------------------------------*/ 
})