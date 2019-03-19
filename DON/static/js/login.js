$(function () {
    // 手机号验证
    $('.inputxt').blur(function () {
        if ($(this).val()=='') return
        var uphonenum = /^1[3|4|5|7|8][0-9]{9}$/;
		$.get('/checkphone/',{'uphone':$(this).val()},function (response) {
            console.log(response)
            $('.textmsg').html(response.msg)
            if(response.status){
                $('.upx1').removeClass('has-error').addClass('has-success').css('color','green')
            }
            else {
                $('.upx1').removeClass('has-success').addClass('has-error').css('color','red')
            }
        })
        if (!uphonenum.test($('.inputxt').val())) {
            $(".dd1").html("请输入正确的手机号！").css("color","red");
        }
        else {
            $(".dd1").html("手机号正确！").css("color","green");
        }
    })
    // 用户名验证
    $(".texttwo").blur(function(){
		if ($(this).val() == '') return
		var username = /^[a-zA-Z0-9_-]{4,16}$/;
		if(!username.test($(".texttwo").val())){
			$(".change1").html("格式错误！").css("color","red")
		}else{
			$(".change1").html("正确！").css("color","green")
		}
	})

    // 密码验证
    $(".textfour").blur(function(){
		if ($(this).val() == '') return
		var passw = /^[a-zA-Z]\w{5,17}$/;
		if(!passw.test($(".textfour").val())){
			$(".dd4").html("密码格式不正确!").css("color","red");
		} else{
			$(".dd4").html("正确！").css("color","green");
		}
	})

    // 再次验证密码
    $(".textfive").blur(function(){
	 	if ($(this).val() == '') return
    	if($(".textfour").val()!= $(".textfive").val()){
			$(".dd5").html("您两次输出的密码不一致").css("color","red");
		}else{
			$(".dd5").html("正确！").css("color","green");
		}
    })
    // 注册
    $('.submit1').click(function () {
        console.log('点了')
        var reg = /^1[3|4|5|7|8][0-9]{9}$/;
        temp = $('.textfour').val()
        if (reg.test($('.inputxt').val())){
            console.log('ok')
            if (temp!=null && temp==$('.textfive').val()) {
                $('#register-view').submit()
            }
        }
    })
})