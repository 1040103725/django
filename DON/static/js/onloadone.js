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
	console.log(oInp.length);
	

	//返回首页
	$("#goHome").click(function(){
		location.href="index.html";
		console.log("aa");
	})
	
	
	var a,b,c,d,e=false;
	
	//判断手机号码
				oInp[0].onblur = function(){
					
					if(oInp[0].value.length==11){
						var str = oInp[0].value;
						var patten = /^1/g;
						
						if( patten.test(str) ){
							console.log('手机号码输入合法');
							$("#error_iphone12").show();
							$("#error_iphone1").hide();
							a=true;
						}else{
							console.log('手机号码输入不合法');
							$("#error_iphone1").show();
							$("#error_iphone12").hide();
//							oShow.innerHTML = '手机号码输入不合法';
						}
					}else{
						var str = oInp[0].value;
						var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
						if( reg.test(str) ){
							console.log('手机号码输入合法');
							$("#error_iphone12").show();
							$("#error_iphone1").hide();
							a=true;
						}else{
							console.log('手机号码输入不合法');
							$("#error_iphone1").show();
							$("#error_iphone12").hide();
//							oShow.innerHTML = '手机号码输入不合法';
						}
					}
				}

				//判断密码
				oInp[1].onblur = function(){
					if(oInp[1].value.length>=6 && oInp[1].value.length<=20){
						$("#error_iphone22").show();
						$("#error_iphone2").hide();
						b=true;
					}else{
						$("#error_iphone2").show();
						$("#error_iphone22").hide();
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
				
				//判断验证码
				$(".registe_yzm input").blur(function(){
					var useridcode = $(".registe_yzm input").val();
					var idcodez = $("#idcode").html();
					console.log(useridcode,idcodez)
					if(useridcode == idcodez){
						console.log("aa");
						$("#error_iphone42").show();
						$("#error_iphone4").hide();
						c=true
					}else{
						console.log("bb");
						$("#error_iphone42").hide();
						$("#error_iphone4").show();
					}
				})
				
	//
	
	//判断cookie登录
	
//点击登录按钮
				$("#tijiao").click(function(){
					console.log("aaaa");
					//获取cookie中注册过的所有用户
					var users = $.cookie("users"); 
					if (users) {
						users = JSON.parse(users);
						
						//遍历查找是否有匹配的用户
						var isExist = false; //表示是否存在该用户
						for (var i=0; i<users.length; i++) {
							if ( $("input:eq(0)").val() == users[i].name && $("input:eq(2)").val() == users[i].pwd ) {
								if( a && b && c){
									location.href="index.html";
								}
								isExist = true; //表示存在该用户
							}
						}
						
						if (!isExist) {
							$("#error_iphone5").show();
						}
						
						
					}
				})
	
	
})
