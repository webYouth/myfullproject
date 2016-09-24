//$(function(){
//	  var myscroll;
//			ajaxs();
//			iscr();
//			function iscr(){
//				myscroll=new IScroll("#markett");
//			}
//			function ajaxs(){
//				     	$.ajax({
//									url:"json/one.json",
//									success:function(mag){
//									  var shuju =mag.date;
//									  var str="";
//									  for(var i in shuju){
//									  	str+='<img style="width:8rem;"src="'+shuju[i].img+'">'
//									  }
//									  $("#mm").html(str);
//									  }
//		            });
//								$.ajax({
//										url:"json/two.json",
//										success:function(mag){
//										  var shuju =mag.date;
//										  var str="";
//										  for(var i in shuju){
//										  	str+='<img src="'+shuju[i].img+'">'
//										  }
//										  $("#tt").append(str);
//										  shuxin()
//										}
//								});
//		  }
//			
//			
//			
//			
//			
//			
//			
//			$("#markett").on("touchmove",function(){
//				 if(myscroll.y>60){
//				 	$(".boom").show();
//				 }
//				 if(myscroll.y<myscroll.maxScrollY-30){
//					
//			     $("#nav").css("display","block")
//				}
//				 if(myscroll.y>myscroll.maxScrollY-10){
//					
//			     $("#nav").css("display","none")
//				} 
//				 
//			})
//			
//			$("#markett").on("touchend",function(){
//				if(myscroll.y>50){
//					$(".boom").hide();
//					shuxin();
//				}
//				/*if(myscroll.y<myscroll.maxScrollY-50){
//					
//			     $("#nav").css("display","block")
//				}*/
//			})
//			
//			function shuxin(){
//				myscroll.refresh();
//			}
//
//
//
//
//
// $(".bottom div").eq(0).on("click",function(){
//		window.location.href = "index.html"
//	})
//	$(".bottom div").eq(1).on("click",function(){
//		window.location.href = "hot.html"
//	})
//	$(".bottom div").eq(2).on("click",function(){
//		window.location.href = "index.html"
//	})
//	$(".bottom div").eq(3).on("click",function(){
//		window.location.href = "mypage.html"
//	})
//
//
//
//
// var time = setInterval(jsq,800)
//		function jsq(){
//			clearInterval(time)
//			var time1 = setInterval(function(){
//				clearInterval(time1);
//				$(".boom p").html("玩命加载中●●")
//			},400)
//			var time2 = setInterval(function(){
//				clearInterval(time2);
//				$(".boom p").html("玩命加载中●●●")
//			},800)
//			time = setInterval(jsq,800)
//		}
//
//
//
//
//
//		$("#gou").click(function(){
//		   	window.location.href="car.html"
//		   })

 /*-------------------------------------------*/
$(function(){
	  var myscroll;
			ajaxs();
			iscr();
			function iscr(){
				myscroll=new IScroll("#markett",{click:true});
			}
			function ajaxs(){
				     	$.ajax({
									url:"json/one.json",
									success:function(mag){
									  var shuju =mag.date;
									  var str="";
									  for(var i in shuju){
									  	str+='<img style="width:8rem;"src="'+shuju[i].img+'">'
									  }
									  $("#mm").html(str);
									  }
		            });
								$.ajax({
										url:"json/two.json",
										success:function(mag){
										  var shuju =mag.date;
										  var str="";
										  for(var i in shuju){
										  	str+='<img  src="'+shuju[i].img+'">'
										  }
										  $("#tt").append(str);
										  shuxin()
										   $("#tt").on("click",function(){
    	                  window.location.href="ztxq.html"
    	
                       })
										}
								});
		  
			         
			
			
			
			
			}
			
			
			
			
			
			
			
			$("#markett").on("touchmove",function(){
				 if(myscroll.y>20){
				 	$(".boom").show();
				 }
				 if(myscroll.y<myscroll.maxScrollY-30){
					
			     $("#nav").css("display","block")
				}
				 if(myscroll.y>myscroll.maxScrollY-10){
					
			     $("#nav").css("display","none")
				} 
				 
			})
			
			$("#markett").on("touchend",function(){
				if(myscroll.y>0){
					$(".boom").hide();
					shuxin();
				}
				/*if(myscroll.y<myscroll.maxScrollY-50){
					
			     $("#nav").css("display","block")
				}*/
			})
			
			function shuxin(){
				myscroll.refresh();
			}





   $(".bottom div").eq(0).on("click",function(){
		window.location.href = "index.html"
	})
	$(".bottom div").eq(1).on("click",function(){
		window.location.href = "hot.html"
	})
	$(".bottom div").eq(2).on("click",function(){
		window.location.href = "index.html"
	})
	$(".bottom div").eq(3).on("click",function(){
		window.location.href = "mypage.html"
	})




 var time = setInterval(jsq,800)
		function jsq(){
			clearInterval(time)
			var time1 = setInterval(function(){
				clearInterval(time1);
				$(".boom p").html("玩命加载中●●")
			},400)
			var time2 = setInterval(function(){
				clearInterval(time2);
				$(".boom p").html("玩命加载中●●●")
			},800)
			time = setInterval(jsq,800)
		}


   $("#gou").click(function(){
   	window.location.href=".html"
   })
})



