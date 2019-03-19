$(function () {
    // 验证手机
    $(".textone").blur(function(){
		if ($(this).val() == '') return
		var phonenum = /^1[3|4|5|7|8][0-9]{9}$/;
		if(!phonenum.test($(".textone").val())){
			$(".dd1").html("请输入手机号！").css("color","red");
		}else if(!phonenum.test($(".textone").val())){
			$(".dd1").html("请输入正确的手机号！").css("color","red");
		}else{
			$(".dd1").html("手机号正确！").css("color","green");
		}
	})

    // 验证密码
    $(".textfour").blur(function(){
		if ($(this).val() == '') return
		var passw = /^[a-zA-Z]\w{5,17}$/;
		if(!passw.test($(".textfour").val())){
			$(".dd4").html("密码格式不正确!").css("color","red");
		} else{
			$(".dd4").html("正确！").css("color","green");
		}
	})
})