$(function(){
	//遍历  已经 登录的cookie
	var logins = $.cookie("logins") ? JSON.parse($.cookie("logins")) : [];
//		for(var i=0; i<logins.length; i++) {
			if (logins.length == 1) {
//				console.log("wodhi")
				$(".topbarleft span").eq(0).html(logins[0].name+",欢迎光临戴欧妮珠宝网！");
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
//			//退出登录
			$("#hello span").click(function(){
				console.log("退出登录成功")
	    		$(".changea").css("display","block");
	    		$(".changeoneea .num").html("退出登录成功，欢迎您下次光临！")
			    $("#bg").css("display","block");
			    //设置延时器隐藏登录弹出框
		        setTimeout(function(){
		        	$(".changea").css("display","none")
		        	$("#bg").css("display","none");
		        },1000)
		        $.cookie("logins", JSON.stringify(logins), {expires:0, path:"/"});
				window.history.go(0);
		        console.log("as")
		        $(".topbarleft span").eq(0).html("您好,欢迎光临戴欧妮珠宝网！<a href='onload.html'>登陆</a> / <a href='login.html'>注册</a>");
	    	})
			
			var zuanW=location.search.replace("?","");
			var zuanW1=zuanW.split("&");
			console.log(zuanW1)
			if(zuanW1[1]){
				var minValue=zuanW1[0];
				$("#mincaratvalue").val(minValue);
				var maxValue=zuanW1[1];
				$("#maxcaratvalue").val(maxValue);
			}else{
				var minValue=parseInt(zuanW)/100;
				console.log(minValue)
				minValue=minValue+"0";
				
				$("#mincaratvalue").val(minValue);
				var maxValue=parseInt(zuanW)/100+0.09;
				$("#maxcaratvalue").val(maxValue);
			}
	
	//1.获取数据
	$.get("../json/list.json",function(data){
		Page(1)
		//console.log(data);
//		Page(1);//刚开始的页面
		$(".pagetwo button").click(function(){
//			   console.log($(this).html()) 
               Page($(this).html())
               if($(this).html()=="下页"){
               	   Page(a)
               	   console.log(a)
               }
             
		})
		
		$("#search").click(function(){
			minValue=$("#mincaratvalue").val();
			maxValue=$("#maxcaratvalue").val();
			Match(minValue,maxValue);
			
			
			$(".pagetwo button").click(function(){
               Match(minValue,maxValue)
               if($(this).html()=="下页"){
               	   Match(minValue,maxValue)
               }
		})
		})
		
		
		function Page(num){//封装翻页函数
			for(var i=0;i<data.length;i++){//列表的页面数
				    var dd=data[i];
				    if(dd.page==num){
				        a=parseInt(num)+1;
				    	$(".listInfo ul").html("");
		            	for(j=0;j<dd.Data.length;j++){
		            		var bb=dd.Data[j];
		            		var Li=$("<li></li>")
		            		for(var n=0;n<bb.data.length-1;n++){
		            			var dataa=bb.data[n+1];
		            			if(n==0){
		            				var Img=('<img src="../img/'+bb.data[n]+'.png/">');
		            				Li.append(Img);
		            			}
		            			var span=$("<span>"+dataa+"</span>");
	//	            			console.log(span)
		            			if(n>=8&&n<=10){
		            				span.css({
		            					"width":"7%",
		            					"margin-left":"0%",
		            					"margin-right":"1.5%"
		            				})
		            			}
		            			if(n>10){
		            				span.css({
		            					"width":"7%",
		            					"margin-left":"-0.1%",
		            					"margin-right":"0%"
		            				})
		            			}
		            			if(n==12){
		            				span.css({
		            					"background":"#f2f2f2",
		            					"height":"24px",
		            					"line-height":"24px",
		            					"margin-top":"5px",
		            					"border-radius":"5px",
		            					"width":"5%",
		            					"margin-left":"0.9%",
		            					"margin-right":"0%"
		            				})
		            			}
		            			Li.append(span)
		            		}
		            		$(".listInfo ul").append(Li);
		            	}
		            	$(".pageone").html("共84款 | 14款/页  | 第"+num+"页/4页")
	            	
	               }
			}
	    }
		
		
		
		
		function Match(minValue,maxValue){//封装翻页函数
			var m=0;
			for(var i=0;i<data.length;i++){//列表的页面数
				    var dd=data[i];
				    $(".listInfo ul").html("");
		            	for(j=0;j<dd.Data.length;j++){//获取某个页面的每一条数据
		            		$(".pagetwo").html("");
		            		var bb=dd.Data[j];
		            		if(bb.data[1]>=minValue&&bb.data[1]<=maxValue){
		            			var button=$("<button>1</button>")
		            			button.appendTo($(".pagetwo"));
		            			var Li=$("<li></li>");
		            			m++;
		            			if(m%14==0){
		            				var mm=m/14;
		            				dd.page=mm;
		            				a=mm+1;
		            				var button=$("<button>"+a+"</button>")
		            			    button.appendTo($(".pagetwo"));
		            			    Page(mm)
		                       }
		            			$(".pageone").html("共"+m+"款 | 14款/页  | 第"+1+"页/"+a+"页")
		            			for(var n=0;n<bb.data.length-1;n++){//获取每条数据的信息
				            			var dataa=bb.data[n+1];
				            			if(n==0){
						            		var Img=('<img src="../img/'+bb.data[n]+'.png/">');
						            		Li.append(Img);
					            		}
				            			var span=$("<span>"+dataa+"</span>");
			//	            			console.log(span)
				            			if(n>=8&&n<=10){
				            				span.css({
				            					
				            					"width":"7%",
				            					"margin-left":"0.3%",
				            				})
				            			}
				            			if(n>10){
				            				span.css({
				            					"width":"7%",
				            					"margin-left":"0%",
				            					"margin-right":"0%"
				            				})
				            			}
				            			if(n==12){
				            				span.css({
				            					"background":"#f2f2f2",
				            					"height":"24px",
				            					"line-height":"24px",
				            					"margin-top":"5px",
				            					"border-radius":"5px",
				            					"width":"4.4%",
				            					"margin-left":"0",
				            					"margin-right":"0"
				            				})
				            			}
		            					Li.append(span)
		            		   }
		            		}
		            		$(".listInfo ul").append(Li);
		            		console.log(m);
		            	}
	              }
			}
//	    }
		
		
		
		
		
		
		
		
		
		
		
	})
	
	
	
})










