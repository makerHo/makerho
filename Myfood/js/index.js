window.addEventListener("load",function(){
	var nav = document.querySelector(".nav");
	var aside=document.querySelector(".aside");
	//scroll 是window的事件
	window.addEventListener("scroll",function(){
		var scrollTop=getScrollSize().top;
		if(scrollTop>25){
			console.log(scrollTop)
			nav.className="navfixed";
			aside.className="aside asideblock"
		}else{
			nav.className="nav";
			aside.className="aside";
		}
		aside.addEventListener("click",function(){
			document.documentElement.scrollTop=0;
			document.body.scrollTop=0;
		})

	})	

/*--------banner loop-------------*/
var imgObjs= document.querySelector(".barImgs img");
var barImgs = document.querySelector(".barImgs")
var banImgLis= document.querySelectorAll(".banImgLi li");
//	barImgs+=barImgs;
//	imgObjs+=imgObjs;
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
		
//section midden top
var smlTopLis= document.querySelectorAll(".smlTop li");
var smlTab1 = document.querySelector(".smlTab1");
var smlTab2 = document.querySelector(".smlTab2");
	smlTopLis.forEach(function(value,index){
		value.addEventListener("click",function(){
			smlTopLis.forEach(function(v,i){
				v.className="";
				smlTab1.className="smlTab1";
				smlTab2.className="smlTab2";
			})
			value.className="smlTopls";
			if(index==0){
				smlTab1.className="smlTab1 smlTabDisNone";
				smlTab2.className="smlTab2";
			}else if(index==1){
				smlTab1.className="smlTab1";
				smlTab2.className="smlTab2 smlTabDisNone";
			}	
		})
	})
/**------------------ secBtmTopRight loop----------------*/
	var secBtmTopLis = document.querySelectorAll(".secBtmTopLeft li");
	var secBtmdivs = document.querySelectorAll(".secBtmdivs div")
//		console.log(secBtmdivs)
		secBtmTopLis.forEach(function(value,index){
			value.addEventListener("click",function(){	
				secBtmTopLis.forEach(function(v,i){
					v.className="";
					secBtmdivs[i].className="";	
				})
				value.className="secBtmTopLeftLoop";
				secBtmdivs[index].className="secBtmdivsnone";
			})
		})
		
/**open door */
var secoprdLeftmo1 = document.querySelector(".secoprdLeft");	
var secoprdRightmo1 = document.querySelector(".secoprdRight");	
var sectionOperDoorScaleLi = document.querySelectorAll(".secoprdRight li");
	window.addEventListener("scroll",function(){
		var scrollTop=getScrollSize().top;
		if(scrollTop>300){
			secoprdLeftmo1.className="secoprdLeft secoprdLeftmo1";
			secoprdRightmo1.className="secoprdRight secoprdRightmo1"
		}else{
			secoprdLeftmo1.className="secoprdLeft";
			secoprdRightmo1.className="secoprdRight";
		}
		//字体放大效果动画
//		autuplays(0);
//		function autuplays(index){
//			var timerlis=setInterval(function(){
//				for(var i=0;i<sectionOperDoorScaleLi.length;i++){
//							sectionOperDoorScaleLi[i].className="";
//						}
//						sectionOperDoorScaleLi[index].className="secContScale";
//						index++;
//						if(index==sectionOperDoorScaleLi.length){
//							index=0
//						}
//			},800)
//		}
		
	})

/**section-opendoor 背景随机*/
var openDoorRandomBg = document.querySelector(".section-opendoor")
var timer=setInterval(function(){
	var randoms=Math.floor(Math.random()*7)
	openDoorRandomBg.style.background="url(img/secclosedoor"+randoms+".jpg)"
	openDoorRandomBg.style.backgroundSize="100% 100%"
},2000)
/** ---------------close door font--------------*/
var sectionOperDoorScaleLi = document.querySelectorAll(".secoprdRight li");
	autuplays(0);
	function autuplays(index){
		var timerlis=setInterval(function(){
			for(var i=0;i<sectionOperDoorScaleLi.length;i++){
						sectionOperDoorScaleLi[i].className="";
					}
					sectionOperDoorScaleLi[index].className="secContScale";
					index++;
					if(index==sectionOperDoorScaleLi.length){
						index=0
					}
		},800)
	}
//				
/** ------------回到顶部-------------*/
/** sessionStroage */
var navRightL=document.querySelector(".navRightL");
var navRightRh=document.querySelector(".navRightRh");
var feedBack1=document.querySelectorAll(".navRightRh div")[0];
var feedBack2=document.querySelectorAll(".navRightRh div")[1];
console.log(feedBack2)
	if(sessionStorage.getItem("username")){
		navRightL.style.display="none";
		navRightRh.style.display="block";
		feedBack1.innerHTML=sessionStorage.getItem("username")
	}else{
		navRightL.style.display="block";
		navRightRh.style.display="none";
	}
	//点击注销
	feedBack2.addEventListener("click",function(){
		sessionStorage.removeItem("username");
		navRightL.style.display="block";
		navRightRh.style.display="none";
	})
 /**----------------------------------- window end--------------------------------*/ 
})