$(function(){
	var myScroll;
	ajaxs()
	iscr()
	$.ajax({
		url:"json/list.json",
		success:function(data){
			var mag = data.data
			var str =""
			for(var i in mag){ 
				str += '<li>'+mag[i].name+'</li>'
			}
			$("#list .li").append(str);
			$(".lis").append(str);
		}
	})
	
	
	function ajaxs(){
		$.ajax({
		url:"json/goods.json",
		success:function(data){
			var mag = data.data;
//			console.log(1);
//			console.log(data);
//			var str = ""
//			for(var i in mag){
//				str += '<dl>'
//				str += '<dt><img src="img/'+mag[i].img+'"/></dt>'
//				str += '<dd>'+mag[i].title+'</dd>'
//				str += '<dd>'
//				str += 	'<p>￥'+mag[i].prices+'<span>￥'+mag[i].oldpri+'</span></p>'
//				str += 	'<div class="car">'
//				str += 		'<img src="img/bycar.gif"/>'
//				str += '</div>'
//				str += '</dd>'
//			    str += '</dl>'
//			}
			$.each(mag, function(index) {
				var odl = $("<dl></dl>");
				var odt = $("<dt dataid='"+mag[index].id+"'>图片加载</dt>")
				var pic = $("<img  class='img' src='img/"+mag[index].img+"'/>")
				var odd = $('<dd>'+mag[index].title+'</dd>')
				var odd1 =
				$('<dd><p>￥'+mag[index].prices+'<span>￥'+mag[index].oldpri+'</span></p><div dataid = "'+mag[index].id+'" class="car"><img src="img/bycar.gif"/></div></dd>')
				
				odl.append(odt)
				odl.append(odd)
				odl.append(odd1)
				pic.on("load",function(){
						sx()
						odt.html(pic)
				})
				$("#box").append(odl);		
			});	
		}
	})
	}
//localstage
		$("#box").on("click","dt",function(){
			var dataid = $(this).attr("dataid");
			localStorage.setItem('dataid',dataid)
			window.location.href = "detail.html"
		})
//加入购物车的数量			
	showStorage();
	block();	
	$("#box").on("click",".car",function(evt){
		var e = evt || window.event;
		var odd = $(this).parents("dl").find(".img")
		var x = odd.offset().left + odd.width()/2;
		var y = odd.offset().top + odd.height()/2;
		$("body").append($(this).parents("dl").find(".img").clone().css({
			"position":"fixed",
			"left":x+'px',
			"top":y+'px',
			'display':'block',
			"width":"50px",
			"height":"50px"}).animate({
			top: $('.incar').offset().top + $('.incar').width()/2,
			left: $('.incar').offset().left + $('.incar').height()/2,
			width:10,
			height:10,
			opacity:0},1000))

	
		var dataid = $(this).attr("dataid");
		localStorage.setItem(dataid,dataid)
		if(localStorage.getItem('goodnum'+dataid)){
			var numb = parseInt(localStorage.getItem('goodnum'+dataid)) + 1;
			localStorage.setItem('goodnum'+dataid,numb)
		}else{
			localStorage.setItem('goodnum'+dataid,1)
		}
		
		
		showStorage();
		block();	
	})
		
	function showStorage(){
			var num = 0;
			var stor = window.localStorage;
			var ston = "";
 			for(var i=0;i<stor.length;i++){ 		
  			var name = stor.key(i);
  			ston = name.split("num")
  			if(ston[0] == "good"){
				num += parseInt(stor.getItem(stor.key(i)))
				localStorage.setItem('num',num)
  			}
 		 }
		}	
	
	
	
	function block(){
			var numbe = localStorage.getItem("num")
			$(".num").html(numbe);
			if(numbe > 0){
				$(".num").css("display","block")
			}else{
				$(".num").css("display","none")
			}
		}
//加载滑动
	function updatePosition(){
		if(this.y<-300){
			$("#up").show();
		}else{
			$("#up").hide();
		}
		
	}

	function iscr(){
		myScroll = new IScroll("#cov",{ mouseWheel: true, click: true,probeType:3})
		myScroll.on('scroll', updatePosition);
		$("#aaaa").on("touchstart",function(){
			myScroll.scrollToElement(document.querySelector('.boom'))
			$("#up").hide();
		})
	}
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
     
     
    $("#cov").on("touchmove",function(){
    	if(myScroll.y > 50){
    		$("#cov .boom").show()
    	}
    })
    
   $("#cov").on("touchend",function(){
   		if(myScroll.y > 0){
    		sx()
    		$("#cov .boom").hide()
    	}
   		if(myScroll.y < myScroll.maxScrollY - 30){
// 			ajaxs()
			$(".end").css("display","block")
   		}else{
   			$(".end").css("display","none")
   		}
   })  
    function sx(){
		myScroll.refresh()
	}

	
	
	
//list 当前li颜色	
	$(".li").on("click","li",function(){
		var index = $(this).index();
		$(this).css({"border-bottom":"0.15rem solid red","color":"#ff9ca0"}).siblings().css({"border":"0","color":"#666"})
		$(".lis li").eq(index).css({"background":"#ffa3a6","color":"#fff"}).siblings().css({"background":"#eee","color":"#666"})
	})
	
	$(".lis").on("click","li",function(){
		var index = $(this).index();
		$(this).css({"background":"#ffa3a6","color":"#fff"}).siblings().css({"background":"#eee","color":"#666"})
		$(".li li").eq(index).css({"border-bottom":"0.15rem solid red","color":"#ff9ca0"}).siblings().css({"border":"0","color":"#666"})
	})
	
	
	$(".down").click(function(){
		$(".lis").toggle();
	})

//加载。。。
		
		var time = setInterval(jsq,800)
		function jsq(){
			clearInterval(time)
			var time1 = setInterval(function(){
				clearInterval(time1);
				$(".boom p").html("玩命加载中•")
			},400)
			var time2 = setInterval(function(){
				clearInterval(time2);
				$(".boom p").html("玩命加载中••••")
			},800)
			time = setInterval(jsq,800)
		}

//list旋转
	$("#list .down").click(function(){
		if($(".don").length > 0){
			$(this).removeClass("don")
			$(this).addClass("dong")
		}else{
			$(this).addClass("don")
			$(this).removeClass("dong")
		}
	})
	$('.back').click(function(){
		window.location.href = 'index.html'
	})

//加入购物车判断是否登录
	$('.incar').on('click',function(){
            if(localStorage.getItem('user')){
                window.location.href = 'car.html';
            }else{
                alert('亲您要登录才能购购买哦！点击确定登录');
                window.location.href = 'html/login.html';
            }
        })
})
