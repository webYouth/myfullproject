$("#zhuce_form .getyzm").click(function(){
	var num = localStorage.getItem("phone_num")
	getyzm()
	$.ajax({
		url:"http://www.bidianwaimai.com/api.php/User/mobile_code",
		dataType:"jsonp",
		data:{
			 'mobile':num
		},
		success:function(data){
			console.log(data)
		}
	});

})
function getyzm(){
	var miao = 60
		var timer = setInterval(function(){
			miao--
			console.log(miao)
			$("#zhuce_form .getyzm").html(miao +"秒后重发")
			if(miao < 1){
				clearInterval(timer)
				$("#zhuce_form .getyzm").html("获取验证码")
			}
		},1000)
}

var pass_reg = /^[A-Za-z0-9]{6,16}$/
$("#zhuce_form .down input").on("keyup",function(){
	var pass1 = $("#zhuce_form .down input").eq(1).val()
	var pass2 = $("#zhuce_form .down input").eq(2).val()
	var yanz1 =pass_reg.test(pass1)
	var yanz2 =(pass1 == pass2)
	console.log(yanz1)
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
	if(yanz1&yanz2){ 
		$("#zhuce-btn").css({"background":"red","color":"#fff"})
		$("#zhuce-btn").on("click",function(){
			localStorage.setItem("ID",localStorage.getItem("phone_num"))
			localStorage.setItem("pass",pass2)
			window.location.href ="login.html"
		})
	}else{
		$("#zhuce-btn").css({"background":"#e0e0e1","color":"#999"})
	}
})

