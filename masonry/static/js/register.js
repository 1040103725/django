//登录用户保存
								var logins = $.cookie("logins") ? JSON.parse($.cookie("logins")) : [];
										for(var i=0; i<logins.length; i++) {
									if ( $("#uSer").val() == logins[i].name ) {
										console.log("该用户已经存在, 不能添加!");
									}
								}
								var login = {
									name:$("#uSer").val()
								}
								logins.push(login);
								$.cookie("logins", JSON.stringify(logins), {expires:null, path:"/"});
								console.log( $.cookie("logins") );
								





//遍历  已经 登录的cookie
	var logins = $.cookie("logins") ? JSON.parse($.cookie("logins")) : [];
//		for(var i=0; i<logins.length; i++) {
			if (logins.length == 1) {
//				console.log("wodhi")
				$("#list1 li").eq(0).find("a").html("您好！"+logins[0].name);
				$("#list1 li").eq(1).find("a").html("退出");
//				console.log($("#list1 li").eq(1).find("a").html())
				
			}
			
			
			if($("#list1 li").eq(0).find("a").html() == "请登录"){
				$("#list1 li").eq(0).click(function(e){
						e.preventDefault();//阻止默认事件
						location.href = "login.html";	
				})
			}else{
				$("#list1 li").eq(0).click(function(){
					window.history.go(0);
				})
			}
			
			//免费注册/退出的跳转
			if($("#list1 li").eq(1).find("a").html() == "退出") {
					$("#list1 li").eq(1).find("a").click(function(){
//						history.href == ""
						$.cookie("logins", JSON.stringify(logins), {expires:0, path:"/"});
						window.history.go(0);
					})
				}else if($("#list1 li").eq(1).find("a").html() == "免费注册"){
//					console.log("000000000")
					$("#list1 li").eq(1).click(function(e){
						
						e.preventDefault();//阻止默认事件
//						console.log("000000000")
//						window.open("register.html");
						location.href = "register.html";						
					})
				}
