$("#login_form input").on("keyup",function(){
	var pass1 = $("#login_form  input").eq(0).val()
	var pass2 = $("#login_form  input").eq(1).val()
	var yanz1 =(localStorage.getItem("ID")==pass1)
	var yanz2 =(localStorage.getItem("pass")==pass2)
	if(yanz1&yanz2){ 
		$("#login_form .btn").css({"background":"red","color":"#fff"})
		$("#login_form .btn").on("click",function(){
			localStorage.setItem("user",localStorage.getItem("phone_num"))
			window.location.href ="../index.html"
		})
	}else{
		$("#login_form .btn").css({"background":"#e0e0e1","color":"#999"})
	}
})

