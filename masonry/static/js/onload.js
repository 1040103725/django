$(function(){
    flag1=flag2=flag3=false;
	$(".textone").blur(function(){ //手机号码验证
		var username=$(this).val().replace(/ /g, "");//用户名去掉空格
		if(username.length!=11 || username.length==0){
			$(".phone").html("请输入正确的手机号码")
		}else{
			flag1=true;
		}
	})
	$(".textone").focus(function(){
		$(".phone").html("")
	})
	$(".textfour").blur(function(){  //dengl密码
		password=$(this)[0].value.replace(/ /g, "");//密码去掉空格
		var pattern = /^[0-9a-zA-Z]{6,20}/;
		if(!pattern.test(password) || password.length==0){
			$(".pas").html("设置密码为6-20位必须包含字母和数字")
		}else{
			flag2=true;
		}
	})
	$(".textfour").focus(function(){
		$(".pas").html("")
	})
//  var check=document.getElementsByClassName("textsix")[0]; //自动登录
//  $(".textsix").click(function(){
//  	if(check.checked){
//  	    flag3=true;
//      }
//  })
    $(".picture .p2 img").click(function(){
    	
    	//获取cookie中注册过的所有用户
		var users = $.cookie("users"); 
		if (users){
			users = JSON.parse(users);
			//遍历查找是否有匹配的用户
			var isExist = false; //表示是否存在该用户
				for (var i=0; i<users.length; i++) {
					if ( $(".textone").val() == users[i].name && $(".textfour").val() == users[i].pwd ){
						console.log("登录成功!");
						isExist = true; //表示存在该用户
						$(".changea").css("display","block");
						$("#bga").css("display","block");
						//设置延时器隐藏登录弹出框
						var changea=document.getElementsByClassName("changea")[0];
				        var bga=document.getElementById("bga");
				        $(".changeoneea .num").html($(".textone").val()+"欢迎光临戴欧妮珠宝网！")
				        timer=setTimeout(function(){
				            changea.style.display="none"
				            bga.style.display="none"
				        },1000)
						Drop()  //退出
						Quit(drop);  //退出登录函数
										
						//登录用户保存
						var logins = $.cookie("logins") ? JSON.parse($.cookie("logins")) : [];
						for(var i=0; i<logins.length; i++) {
							if ( $(".textone").val() == logins[i].name ) {
								console.log("该用户已经存在, 不能添加!");
								return;
							}
						}
						var login = {
								name:$(".textone").val()
							}
						logins.push(login);
						$.cookie("logins", JSON.stringify(logins), {expires:null, path:"/"});
						console.log( $.cookie("logins") );
							 setTimeout(function(){
					        	window.history.back();
					        },1000)
						
						break;
					}
					if (!isExist) {
						if ( ($(".textone").val() != users[i].name && $(".textfour").val() == users[i].pwd )||($(".textone").val() != users[i].name && $(".textfour").val() != users[i].pwd ) ) {
							$(".phone").html("您输入的手机号码不存在，请先注册")
						}
						if ( $(".textone").val() == users[i].name && $(".textfour").val() != users[i].pwd ) {
							$(".pas").html("您输入的登录密码不正确，请重试")
						}
					}
				}	
		}
	})
    
//  //点击隐藏登录弹出框
//  $(".pdeng span").click(function(){
//  	clearInterval(timer)
//  	$(".changea").css("display","none");
//		$("#bga").css("display","none");
//  })
//  Drop();
//  Quit(drop);
   
    function Drop(){
    	$(".topbarleft span").eq(0).html($(".textone").val()+",欢迎光临戴欧妮珠宝网！");
		drop=$("<span>退出</span>");
    	drop.hover(function(){
			$(this).css({
				"cursor":"pointer",
				"color":"red"
			})
		},function(){
			$(this).css({
				"cursor":"pointer",
				"color":"black"
			})
		})
		drop.appendTo($(".topbarleft span").eq(0))
    }

    function Quit(num){  //退出登录函数
    	num.click(function(){
    		$(".changea").css("display","block");
		    $("#bga").css("display","block");
		    $(".changeoneea .num").html("退出登录成功，欢迎您下次光临！")
		    //设置延时器隐藏登录弹出框
			var changea=document.getElementsByClassName("changea")[0];
	        var bga=document.getElementById("bga");
	        var timer=setTimeout(function(){
	            changea.style.display="none"
	            bga.style.display="none"
	        },2000)
	        console.log("as")
	        $(".topbarleft span").eq(0).html("您好,欢迎光临戴欧妮珠宝网！<a href='onload.html'>登陆</a> / <a href='login.html'>注册</a>");
    	})
    }
})