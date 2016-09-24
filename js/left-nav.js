var start_clintx = 0
var move_clintx = 0
var doc_clintx = 0
$("#left_nav").on("touchstart",function(evt){
	var e = evt || window.event
	start_clintx =parseInt(e.touches[0].clientX)

})

$("#left_nav").on("touchmove",function(evt){
	var e = evt || window.event
	 move_clintx =parseInt(e.touches[0].clientX)
	 
})

$("#left_nav").on("touchend",function(evt){
	console.log(doc_clintx)
	var end_clintx = start_clintx - move_clintx
	//console.log(end_clintx)
	if(end_clintx >0 ){
		$("#nav-all").addClass("left_hide")
		$("#nav-all").removeClass("right_hide")
		$("#nav-all").removeClass("chu")
	}
})

$(document).on("touchstart",function(evt){
	var e = evt || window.event
	doc_clintx =parseInt(e.touches[0].clientX)
	console.log(doc_clintx)
	if(doc_clintx >224 ){
		$("#nav-all").addClass("left_hide")
	}
})
$(".search .all").click(function(){
	$("#nav-all").addClass("chu")
})