/*=========================page1=================================*/
$(function(){

//	var mySwiper = new Swiper ('.swiper-container', {
//		
//	})
	$.ajax({
		url:"json/hot.json",
		async:true,
		success:function(data){
/*==============================倒计时=================================*/
		var time = setInterval(countdown,1000)
			function countdown(){
		        var today = new Date();
		        var aimday = new Date(2016,09,1);
		        var distime = Math.floor(aimday.getTime()-today.getTime())/1000;
		        // console.log(distime)
		        var date = Math.floor(distime/3600/24);
		        var hour = Math.floor(distime/3600%24);
		        var minute = Math.floor(distime%3600/60);
		        var seconds = Math.floor(distime%3600%60);
		        if(seconds<10){
		            seconds = '0'+seconds;
		        }else{
		            seconds = seconds;
		        }
		        // console.log(seconds)
		        $('.day').html(date);
		        $('.hour').html(hour);
		        $('.minute').html(minute);
		        $('.seconds').html(seconds);
      		}
			var mag = data.data;
			var str = "";
			
			for(var i in mag){
				str += '<div class="zong">';
				str += '<div class="tu l"><img src="'+mag[i].img+'"></div>';
				str += '<ul class="l">';
				str += '<li class="l name">'+mag[i].name+'</li>';
				str += '<div class="timer">仅剩 : <span class="day"></span>天<span class="hour"></span>小时<span class="minute"></span>分钟<span class="seconds"></span>秒</div>'
				str += '<li><span class="sale l">'+mag[i].sale+'</span><span class="price l">'+mag[i].price+'</span><li>';
				str += '<li class="btn l"><img src="'+mag[i].btn+'"></li>';
				str += '<li class="qiang l">'+mag[i].qiang+'</li>';
				str += '<li class="l"><img class="img1" src="'+mag[i].img1+'"></li>';
				str += '<li class="jian l">'+mag[i].jian+'</li>';
				str += '</ul>';
				str += '</div>';
			}
			$(".con").append(str)
			myScroll = new IScroll(".page1",{
			})
			myScroll.refresh()
		}	
	});
})
/*===============================加载=========================*/
var timer = setInterval(jsq,800)
		function jsq(){
			clearInterval(timer)
			var time1 = setInterval(function(){
				clearInterval(time1);
				$(".boom p").html("玩命加载中?")
			},400)
			var time2 = setInterval(function(){
				clearInterval(time2);
				$(".boom p").html("玩命加载中????")
			},800)
			timer = setInterval(jsq,800)
		}
/*===============================scroll=========================*/

/*==========================page2====================================*/
$(function(){
	$.ajax({
		url:"json/hot.json",

		success:function(data){
			
			var mag = data.data1;
			var str = "";
			
			for(var i in mag){
				str += '<div class="all">'
				str += '<div class="pic l"><img src="'+mag[i].img+'"></div>';
				str += '<ul class="l">'
				str += '<li class="ming l">'+mag[i].name+'</li>';
				
				str += '<li><span class="sale l">'+mag[i].sale+'</span><span class="price l">'+mag[i].price+'</span><li>';
				str += '<li class="l"><img class="btn" src="'+mag[i].btn+'"></li>'
				str += '<li class="time l">'+mag[i].time+'</li>';
				str += '</ul>'
				str += '</div>';
				
			}
			$(".list").append(str);
			//console.log(str);
			myScroll = new IScroll(".page2",{
			})
			myScroll.refresh()
		}
		
	});
})
/*=========================选项卡=====================================*/
$(function(){
	var mySwiper2 = new Swiper('#swiper-container2',{
			watchSlidesProgress : true,
			watchSlidesVisibility : true,
			slidesPerView : 2,
			onTap: function(){
						mySwiper3.slideTo( mySwiper2.clickedIndex)
					}
			})
			var mySwiper3 = new Swiper('.swiper-container',{
			
			onSlideChangeStart: function(){
						updateNavPosition()
					}
			
			})
			
			function updateNavPosition(){
					$('#swiper-container2 .active-nav').removeClass('active-nav')
					var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');
			
			
					if (!activeNav.hasClass('swiper-slide-visible')) {
			console.log(1);
						if (activeNav.index()>mySwiper2.activeIndex) {
			console.log(2);
							var thumbsPerNav = Math.floor(mySwiper2.width/activeNav.width())-1
							mySwiper2.slideTo(activeNav.index()-thumbsPerNav)
						}
						else {
			console.log(3);
							mySwiper2.slideTo(activeNav.index())
						}	
					}
				}
})
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
/*===========================gwc========================*/
$(function(){
	$(".gwc").click(function(){
		if(localStorage.getItem('user')){
	        window.location.href = 'car.html';    
	    }else{
            alert('亲您要登录才能收藏哦！点击确定登录');
            window.location.href = 'html/login.html';
	    }
	})
	$(".return").click(function(){
		window.location.href="index.html";
	})

		
})