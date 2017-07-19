$(document).ready(function () {
	$(".phone1").css({"transition":"1s","transform":"translateX(-200px)","opacity":"1"});
	window.onscroll=function(){
 	var p_h=document.documentElement.scrollTop||document.body.scrollTop;
 	if (p_h>=10) {
 		setTimeout(function () {
 			$(".phone2").css({"transition":"1s","transform":"translateX(200px)","opacity":"1"});
 			$(".f4").css({"transition":"0.5s","transform":"translateY(200px)","opacity":"1"});
 			$(".f5").css({"transition":"0.5s","transform":"translateY(-200px)","opacity":"1"});
 		},200);
 	}
 	console.log(p_h);
 	if (p_h>=200) {
		 setTimeout(function () {
 			$(".f6").css({"transition":"1s","transform":"translateX(200px)","opacity":"1"});
 		},200);
		 setTimeout(function () {
 			$(".f7").css({"transition":"1s","transform":"translateX(200px)","opacity":"1"});
 		},400);
		 setTimeout(function () {
 			$(".f8").css({"transition":"1s","transform":"translateX(-200px)","opacity":"1"});
 		},600);
 	}
 	if (p_h>=400) {
 		 setTimeout(function () {
 			$(".f11").css({"transition":"1s","transform":"translateX(200px)","opacity":"1"});
 		},200);
		 setTimeout(function () {
 			$(".f10").css({"transition":"1s","transform":"translateX(-200px)","opacity":"1"});
 		},400);
		 setTimeout(function () {
 			$(".f21").css({"transition":"1s","transform":"translateX(-200px)","opacity":"1"});
 		},600);
 		
 	}
 	if (p_h>=600) {
 		 setTimeout(function () {
 			$(".f24").css({"transition":"1s","transform":"translateX(200px)","opacity":"1"});
 		},200);
		 setTimeout(function () {
		 	$(".f23").css({"transition":"1s","transform":"translateX(200px)","opacity":"1"});
 		},400);
		 setTimeout(function () {
 			$(".f13").css({"transition":"1s","transform":"translateX(-200px)","opacity":"1"});
 		},600);
 		
 	}
 	if (p_h>=1100) {
 		 setTimeout(function () {
 			$(".f14").css({"transition":"1s","transform":"translateY(-100px)","opacity":"1"});
 			$(".f17").css({"transition":"1s","transform":"translateY(100px)","opacity":"1"});
 			$(".f18").css({"transition":"1s","transform":"translateY(100px)","opacity":"1"});
 		},200);
		 setTimeout(function () {
 			$(".f15").css({"transition":"1s","transform":"translateX(200px)","opacity":"1"});
 			$(".f16").css({"transition":"1s","transform":"translateX(-200px)","opacity":"1"});
 		},400);
 		
 	}

 }


})