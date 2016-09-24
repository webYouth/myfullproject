$(function(){
	
	    var	myscroll=new IScroll("#markett");
			
//  	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
			
		$("#markett").on("touchmove",function(){
				 console.log(myscroll.maxScrollY + ' '+ myscroll.y)
				 if(myscroll.y<myscroll.maxScrollY+200){
					
			         $("#bottom").css("display","none")
			         
				  }
				 if(myscroll.y>myscroll.maxScrollY+200){
					
			       $("#bottom").css("display","block")
				  } 
				 
		})

			
			$("#markett").on("touchend",function(){
				if(myscroll.y<myscroll.maxScrollY-30){
					$("#bottom").hide();
//					shuxin();
				}
				/*if(myscroll.y<myscroll.maxScrollY-50){
					
			     $("#nav").css("display","block")
				}*/
			})
			
			
			$(".zhuan").click(function(){
				window.location.href="zt.html"
			})
				
		   $("#gou").click(function(){
	      	window.location.href="car.html"
	      
	       })	
			
		

         var time = setInterval(jsq,800)
//		function jsq(){
//			clearInterval(time)
//			var time1 = setInterval(function(){
//				clearInterval(time1);
//				$(".boom p").html("玩命加载中●●")
//			},400)
////			var time2 = setInterval(function(){
////				clearInterval(time2);
////				$(".boom p").html("玩命加载中●●●")
////			},800)
//			time = setInterval(jsq,800)
//		}


  



 
})


















