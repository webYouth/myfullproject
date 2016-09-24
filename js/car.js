$(function(){
//	localStorage.setItem("5",5)
//	localStorage.setItem("2",2)
//	localStorage.setItem("6",6)
//	localStorage.setItem("7",7)
//	localStorage.setItem("8",8)
//	localStorage.setItem("9",9)
//	localStorage.setItem("1",1)
//	localStorage.setItem("3",3)
	$('.back').click(function(){
		window.location.href = 'list.html'
	})
	//判断是否存在id
	var local = window.localStorage;
	var arr =[];
	for(var i=0;i<local.length;i++){
		var numId = localStorage.key(i);
		if(!isNaN(numId)){
			arr.push(numId)
		}
	}
	var sum=0;
	var shuliang = 0;
	$.ajax({
		url:"json/goods.json",
		success:function(mag){
			var str = strName = "";
			for(var i in mag){
				var data = mag.data;
				var price=0;
				for(var i=0;i<arr.length;i++){
					for(var j=0;j<data.length;j++){
						if(arr[i]==data[j].id){
//							console.log(data.length)
//							console.log(arr[i])
							var curNum= localStorage.getItem("goodnum"+data[j].id);
							shuliang +=Number( localStorage.getItem("goodnum"+data[j].id));
							price = data[j].prices;
							sum += Number(curNum*price);
							str += '<dl class="stores"><span class="select goodsele select_red" goodid="'+data[j].id+'">&radic;</span>'
							str += '<dt><img src="img/'+data[j].img+'"/></dt><dd><span class="good_title">'+data[j].title+'</span></dd><dd class="prices">￥<span id="price" goodid="'+data[j].id+'">'+data[j].prices+'</span><p class="pp">￥<span class="old">'+data[j].oldpri+'</span></p></dd>'
							str +='<dd class="teast">口味：苹果味</dd><dd class="number"><span  class="decrease" goodid="'+data[j].id+'"></span><input type="number"value="'+curNum+'" class="nums" goodid="'+data[j].id+'"/><span  class="crease" goodid="'+data[j].id+'"></span></dd></dl>'
							strName = '<div class="name"><span class="select check select_red">&radic;</span><p class="txt"><i class="pic"></i>小喵自营商品</p></div>'
						}
					}
				}
//				$('#wrap').prependTo(strName)
				$(".wrapper").append(str)
				$('.shuliang').html(shuliang)
//				console.log( shuliang)
			}
//			console.log(sum);
			$('.jiege').html('￥'+sum)//总价
			//点击小按钮
			$('.goodsele').click(function(){
				if($(this).hasClass("select_red")){
					$(this).removeClass('select_red');
					$('.check').removeClass('select_red');
					
					var nums = $(this).parent().find('.nums').val();
					var price= $(this).parents('.stores').find("#price").html()
					//总价——当前商品的小计
					sum = Number(sum-nums*price)
//					console.log(price)
					$('.jiege').html('￥'+sum)
				}else{
					$(this).addClass('select_red');
//					var delnum = $('.goodsele').filter('.select_red')
//					console.log(delnum.length)
					var a = $('.select_red').length
					var b = $('.stores').length
					if(a==b){
						$('.check').addClass('select_red')
					}
					var nums = $(this).parent().find('.nums').val();
					var price= $(this).parents('.stores').find("#price").html()
					//总价——当前商品的小计
					sum = Number(sum+nums*price)
					$('.jiege').html('￥'+sum)
//					console.log(sum)
				}
			})
			//点击全选按钮
			$('.check').click(function(){
				if($(".goodsele").hasClass("select_red")){
					$('.select').removeClass('select_red');
					$('.jiege').html('￥'+ "0.00");
					$('.shuliang').html('0')
				}else{
					$('.select').addClass('select_red')
//					var n = $('.nums')
//					var p = $('#price')
//					for(var i in n){
//						var nn = Number(n[i].value)
////						var pp = Number(p[i].innerHTML)
////						sum += nn*pp
//					}
//					console.log(p)
					$('.jiege').html('￥'+ sum);
					$('.shuliang').html(shuliang)
					
					
				}
			})
			
		}
		
	});
	
//	$('.shuliang').html(window.localStorage.getItem('num'))
	/*数量加*/
	$(".wrapper").on("click",".crease",function(){
		var nums = $(this).prev().val();
		var price= $(this).parents('.stores').find("#price").html()
		//总价——当前商品的小计
		var cursum = Number(sum-nums*price)
		var goodid = $(this).attr('goodid')
		nums++;
		//点击改变数量框的数量
		$(this).prev().val(nums);
		//设置改变后的数量到localstorage中
		localStorage.setItem("goodnum"+goodid,nums)
		$('.tip').css('display','none')
		//获取localstorage中改变后的数量
		var goodnum = localStorage.getItem("goodnum"+goodid);
		//获取页面中商品的单价
		var price= $(this).parents('.stores').find("#price").html()
		
		//当前点击商品，价格小计
		var subtotle = Number(goodnum*price)
		//点击后，生成新的合计价格
		sum = subtotle + cursum
//		console.log(sum)
		$('.jiege').html('￥'+sum)//总价
		//总数量的改变
		var shuliang = $('.shuliang').html()
		shuliang++;
		shuliang = $('.shuliang').html(shuliang)
//		localStorage.number = nums;
	})
	/*数量减*/
	$(".wrapper").on("click",".decrease",function(){
		var nums = $(this).next().val();
		var price= $(this).parents('.stores').find("#price").html();
		var cursum = Number(sum-nums*price);
		var goodid = $(this).attr('goodid')
		nums--;
		//当点击数量小于1的时候，显示一个小弹窗
		if(nums<1){
			nums = 1;
			$('.tip').css('display','block')
			setTimeout(function(){
				$('.tip').css('display','none')
			},2000)
		}
		localStorage.setItem("goodnum"+goodid,nums);
		$(this).next().val(nums);
		var goodnum = localStorage.getItem("goodnum"+goodid);
		var price= $(this).parents('.stores').find("#price").html()
		//当前点击商品的价格小计
		var subtotle = Number(goodnum*price)
		//点击后，生成新的合计价格
		sum = subtotle + cursum
		$('.jiege').html('￥'+sum)//总价
		//总数量的改变
		var shuliang = $('.shuliang').html()
		shuliang--;
		shuliang = $('.shuliang').html(shuliang)
		
	})
	//数量框失焦事件
	$(".wrapper").on("blur",".nums",function(){
		var goodid = $(this).attr('goodid')
//		console.log(goodid)
		var nums = $(this).val()
		localStorage.setItem("goodnum"+goodid,nums)
	})

	//点击编辑按钮---可以删除商品
	onff = true
	$('.edi').click(function(){
		if(onff){
			$('.edi').html('完成');
			$('.select').removeClass('select_red')
			$(".delbtn").css('display','block')
			$('.tithide').css('display','none')
		}else{
			$('.edi').html('编辑')
			$('.select').addClass('select_red')
			$('.tithide').css('display','block')
			$(".btn").html('结算(<span class="shuliang"></span>)')
			$(".delbtn").css('display','none')
			$('.shuliang').html(window.localStorage.getItem('num'))
			window.location.reload();
		}	
		onff = !onff;
	})
	//删除商品
	$('.delbtn').click(function(){
		if($(".goodsele").hasClass("select_red")){
			var delArr = $('.select_red');
			var arr = [];
			var num = localStorage.getItem('num')
//			var delnum = $('.goodsele').filter('.select_red')
			
			for(var i =0;i<delArr.length;i++){
//				num = Number(num)-Number(delnum.length)
//				console.log(delnum.length)
//				localStorage.setItem('num',num)
				arr.push(delArr[i].getAttribute('goodid'));
				for(var j =0;j<arr.length;j++){
					localStorage.removeItem(arr[j]);
					localStorage.removeItem('goodnum'+arr[j]);
				}
			}
			$('.select_red').parents('.stores').remove();
			if(!$(".wrapper").find('.select').hasClass("goodsele")){
//				$('.name').html("")
//				$('.tit').html('');

			}
			
		}
	})

})
