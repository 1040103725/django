$(function(){
	
	$(".registe_from_div input").on("focus", function(){
		
		$(this).parent().addClass("input_hover");

	}).on("blur",function(){
		$(this).parent().removeClass("input_hover");
	})
	
	$(".registe_yzm input").on("focus", function(){
		
		$(this).parent().addClass("input_hover");

	}).on("blur",function(){
		$(this).parent().removeClass("input_hover");
	})
	
	$(".registe_iphoneyzm input").on("focus", function(){
		
		$(this).parent().addClass("input_hover");

	}).on("blur",function(){
		$(this).parent().removeClass("input_hover");
	})
	
	var oInp = document.getElementsByTagName('input');
	console.log(oInp);

	var q,w,e,r,t=false;
	
	//判断手机号码
				oInp[0].onblur = function(){
					if(oInp[0].value.length==11){
						var str = oInp[0].value;
						var patten = /^1/g;
						if(patten.test(str)){
							console.log('手机号码输入合法');
							$("#error_iphone12").show();
							$("#error_iphone1").hide();
							q=true;
						}else{
							console.log('手机号码输入不合法');
							$("#error_iphone1").show();
							$("#error_iphone12").hide();
//							oShow.innerHTML = '手机号码输入不合法';
						}
					}else{
						$("#error_iphone1").show();
						console.log('手机号码输入不合法');
						$("#error_iphone12").hide();
					}
				}
				
				var errorParssword = document.getElementById("error_parssword");
				var oSpan = errorParssword.getElementsByTagName("span");
				console.log(oSpan.length);
				
				//返回首页
					$("#goHome").click(function(){
						location.href="index.html";
						console.log("aa");
					})
				
				
				//判断密码的级别
				oInp[1].onblur = function(){
					if(oInp[1].value.length>=6 && oInp[1].value.length<=20){
						$("#error_iphone22").show();
						$("#error_iphone22 a").html("密码强度为：");
						$("#error_iphone2").hide();
						$("#error_parssword").hide();
						w=true;
					}else{
						$("#error_iphone2").show();
						$("#error_parssword").hide();
						$("#error_iphone22").hide();
					}
				}
				oInp[1].onkeydown = function(){ //不能用onmousedown
					$("#error_parssword").show();
					$("#error_iphone2").hide();
					$("#error_iphone22").hide();
						if(oInp[1].value.length>=5 && oInp[1].value.length<=10){
						oSpan[0].style.backgroundColor = '#ffc353';
						oSpan[1].style.backgroundColor  = '#808080';
						oSpan[2].style.backgroundColor  = '#808080';
					}else if(oInp[1].value.length>=11 && oInp[1].value.length<=15){
						oSpan[0].style.backgroundColor  = '#ffc353';
						oSpan[1].style.backgroundColor  = '#b6dc2f';
						oSpan[2].style.backgroundColor  = '#808080';
					}else if(oInp[1].value.length>=16 && oInp[1].value.length<=20){
						oSpan[0].style.backgroundColor  = '#ffc353';
						oSpan[1].style.backgroundColor  = '#b6dc2f';
						oSpan[2].style.backgroundColor  = '#82be0e';
					}else{
						oSpan[0].style.backgroundColor  = '#808080';
						oSpan[1].style.backgroundColor  = '#808080';
						oSpan[2].style.backgroundColor  = '#808080';
					}
				}
				
				
				//两次密码必须一样
				oInp[2].onblur = function(){
					if(oInp[1].value == oInp[2].value){
						$("#error_iphone3").hide();
						$("#error_iphone32").show();
						e =true;
					}else{
						$("#error_iphone32").hide();
						$("#error_iphone3").show();
					}
				}
				
				
				
					$("#idcode").click(function(){
		
						var arr = [];
						for(var i=0;i<4;i++){
							var  str = parseInt( (Math.random()*10)%2 );
							if(str){
								arr += parseInt( Math.random()*10 );
							}else{
								arr += String.fromCharCode( parseInt(Math.random()*25+65) );
							}
						}
						$(this).html(arr);
						
						function randomColor(){
							return  "rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
						}
						
						
						$("#idcode").css("color",randomColor);
					})
				
				$(".chang_idcode span").click(function(){
		
						var arr = [];
						for(var i=0;i<4;i++){
							var  str = parseInt( (Math.random()*10)%2 );
							if(str){
								arr += parseInt( Math.random()*10 );
							}else{
								arr += String.fromCharCode( parseInt(Math.random()*25+65) );
							}
						}
						$("#idcode").html(arr);
						
						function randomColor(){
							return  "rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
						}
						
						
						$("#idcode").css("color",randomColor);
					})
				
				
				$(".registe_yzm input").blur(function(){
					var useridcode = $(".registe_yzm input").val();
					var idcodez = $("#idcode").html();
					console.log(useridcode,idcodez)
					if(useridcode == idcodez){
						console.log("aa");
						$("#error_iphone42").show();
						$("#error_iphone4").hide();
						r = true;
					}else{
						console.log("bb");
						$("#error_iphone42").hide();
						$("#error_iphone4").show();
					}
				})
				
				
				//获取手机验证码，判断是否注册过
				$("#gainword").click(function(){
					//先获取之前保存在cookie中的用户
						var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
						
						//遍历users数组, 判断是否存在该用户,如果存在则不能注册
						for(var i=0; i<users.length; i++) {
							if ( $("#username").val() == users[i].name ) {
									$("#error_iphone6").show();
								return;
							}else{
								$("#error_iphone6").hide();
							}
						}
				})
				
				//注册
				// 点击注册按钮
				$("#tijiao1").click(function(){
					
					if(q && w && e && r){
						//先获取之前保存在cookie中的用户
						var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
						
						//遍历users数组, 判断是否存在该用户,如果存在则不能注册
						for(var i=0; i<users.length; i++) {
							if ( $("#username").val() == users[i].name ) {
									$("#error_iphone6").show();
								return;
							}else{
								$("#error_iphone6").hide();
								var user = {
									name: $("#username").val(), //用户名
									pwd: $("#password").val() //密码
								}
								users.push(user); //添加新用户
								
								//保存到cookie中
								$.cookie("users", JSON.stringify(users), {expires:30, path:"/"});
								console.log( $.cookie("users") );
								location.href = "onload.html";
									}
						}
						
						//需要注册的用户(需要保存到cookie中的用户)
						
					}
					
					
					
				})
				
	//
	
})
