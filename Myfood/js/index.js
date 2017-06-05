window.addEventListener("load",function(){
	//nav top
	var nav = document.querySelector(".nav");
//	console.log(nav)
	var scrollTop=getScrollSize().top;
		console.log(scrollTop)
	//scroll 是window的事件
	window.addEventListener("scroll",function(){
		if(scrollTop>56){
			nav.className="navfixed";
		}else{
			nav.className="";
		}

	})	
/** window end*/

})