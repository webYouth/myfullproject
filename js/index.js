$(function(){
	/*===============点击分类 划出侧边栏================*/
	
	if(localStorage.getItem("user")){
		$("#left_nav .up dd").html("<span>"+localStorage.getItem("user")+"</span>")
		$("#left_nav .up dd").css("color","#f6f6f6")
	}
	
	$(".search .all").click(function(){
		$("#nav-all").addClass("chu")
		$("#nav-all").removeClass("left_hide")
		$(".right_nav").addClass("right_hide")
	})
var start_clintx = 0
var move_clintx = 0
var doc_clintx = 0

$("#nav-all").on("touchstart",function(evt){	
	var e = evt || window.event
	start_clintx =parseInt(e.touches[0].clientX)
})
$("#nav-all").on("click ",function(evt){
	var e = evt || window.event
	var nav_all = document.getElementById("nav-all")
	var nav_width =parseInt(getstyle(nav_all,"width"))
	var nav_offwidth = e.offsetX
	var percent = nav_offwidth/nav_width
		console.log(percent)
	if(percent >0.8){
		$("#nav-all").addClass("left_hide")
		$(".right_nav").removeClass("right_hide")
		$("#nav-all").removeClass("chu")
	}


})
function getstyle(obj,attr){
	if(obj.currentStyle){
		return  obj.currentStyle[attr]
	}else{
		return  getComputedStyle(obj,false)[attr]
	}
}

$("#nav-all").on("touchmove",function(evt){
	var e = evt || window.event
	 move_clintx =parseInt(e.touches[0].clientX)
	 
})

$("#nav-all").on("touchend",function(evt){
	var end_clintx = start_clintx - move_clintx
	//console.log(start_clintx+":"+ move_clintx)
	if(end_clintx >0 &&move_clintx>0){
		$("#nav-all").addClass("left_hide")
		$(".right_nav").removeClass("right_hide")
		$("#nav-all").removeClass("chu")
	}
	
})


$("#left_nav .down .first").click(function(){
	window.location.href ="list.html"
})
	/*===============链接购物车================*/
	$(".search .shop").click(function(){
		window.location.href=""
	})
	/*===============banner图================*/
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		pagination: '.swiper-pagination',
		autoplay : 5000,
		autoplayDisableOnInteraction : false
					
	}) 
	/*===============show=====================*/
	add()
	function add(){
	$.ajax({
		url:"json/index.json",
		async:true,
		success:function(data){
			var mag = data.data;	
			$(".show .left img").attr("src",mag[0].img);
			console.log(mag[0].img)
			$(".show .right .shang img").attr("src",mag[1].img);
			console.log(mag[1].img)
			$(".show .right .xia .zuo img").attr("src",mag[2].img);
			$(".show .right .xia .you img").attr("src",mag[3].img);
		}
	})
	}
	
	/*===============list  加载================*/
	var myscroll;
	aja()
	iscr()
	function iscr(){
			myscroll=new IScroll(".hua",{   //给到要动元素（ul）的父集(box)	
			})
	}
	function aja(){
		$.ajax({
			url:"json/index.json",
			async:true,
			success:function(data){
				var mag = data.data1;
				$.each(mag,function(index){
					var odiv = $("<div></div>")
					var odivpic = $("<div>加载图片</div>")
					var pic = $('<img class="pic" src="'+mag[index].img+'"/>')
					var name = $('<div class="name">'+mag[index].name+'</div>')
					var price = $('<div class="price">'+mag[index].price+'</div>')
					odiv.append(odivpic)
					odiv.append(name)
					odiv.append(price)
					pic.on("load",function(){
						myscroll.refresh()	
						odivpic.html(pic)
					})
					$(".list").append(odiv)
					
				})
				// iscr();
			}
		});
	}
		
	/*===================刷新页面===================*/
		$(".hua").on("touchmove",function(){
			//alert(1)
			if(myscroll.y>50){
				$(".boom").show()
				
			}
		})
		$(".hua").on("touchend",function(){
			//alert(1)
			if(myscroll.y>0){
				$(".hua .boom").hide()
				myscroll.refresh()
			}
			if(myscroll.y<myscroll.maxScrollY-50){
				aja()
			}
		})
	/*================玩命加载中================*/
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

	/*=================bottom点击事件================*/
	$(".bottom div").eq(0).on("click",function(){
		window.location.href = "index.html"
	})
	$(".bottom div").eq(1).on("click",function(){
		window.location.href = "hot.html"
	})
	$(".bottom div").eq(2).on("click",function(){
		window.location.href = "zt.html"
	})
	$(".bottom div").eq(3).on("click",function(){
		window.location.href = "mypage.html"
	})
	
	
	/*点击跳转到list页*/
	$('.first').click(function(){
		window.location.href = 'list.html'
	})
	
	
	
	
	
})
