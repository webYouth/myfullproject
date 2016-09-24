$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
//  	direction: 'horizontal'
	    // 如果需要分页器
//	    pagination: '.swiper-pagination',
	  })        
	
	setTimeout(function(){
		$("#box").hide()
	},2000)
	
	$('.reg').click(function(){
		window.location.href = 'index.html'
	})
})
