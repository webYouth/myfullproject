$("#rigister-form input").on("keyup",function(){
	var phone_num = $("#rigister-form .phone").val()
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/; 
	if(myreg.test(phone_num)){ 
		$("#rigister-btn").css({"background":"red","color":"#fff"})
		$("#rigister-btn").on("click",function(){
			localStorage.setItem("phone_num",phone_num)
			window.location.href ="zhuce.html"
		})
	}else{
		$("#rigister-btn").css({"background":"#e0e0e1","color":"#999"})
	}
})

