// $(function(){
// 	//遍历  已经 登录的cookie
// 	var logins = $.cookie("logins") ? JSON.parse($.cookie("logins")) : [];
// //		for(var i=0; i<logins.length; i++) {
// 			if (logins.length == 1) {
// //				console.log("wodhi")
// 				$(".topbarleft span").eq(0).html(logins[0].name+",欢迎光临戴欧妮珠宝网！");
// 				drop=$("<span>退出</span>");
// 		    	drop.hover(function(){
// 					$(this).css({
// 						"cursor":"pointer",
// 						"color":"red"
// 					})
// 				},function(){
// 					$(this).css({
// 						"cursor":"pointer",
// 						"color":"black"
// 					})
// 				})
// 				drop.appendTo($(".topbarleft span").eq(0))
//
// 			}
// //			//退出登录
// 			$("#hello span").click(function(){
// 				console.log("退出登录成功")
// 	    		$(".changea").css("display","block");
// 	    		$(".changeoneea .num").html("退出登录成功，欢迎您下次光临！")
// 			    $("#bg").css("display","block");
// 			    //设置延时器隐藏登录弹出框
// 		        setTimeout(function(){
// 		        	$(".changea").css("display","none")
// 		        	$("#bg").css("display","none");
// 		        },1000)
// 		        $.cookie("logins", JSON.stringify(logins), {expires:0, path:"/"});
// 				window.history.go(0);
// 		        console.log("as")
// 		        $(".topbarleft span").eq(0).html("您好,欢迎光临戴欧妮珠宝网！<a href='onload.html'>登陆</a> / <a href='login.html'>注册</a>");
// 	    	})
//
			
			
			
			
	// //所有分类
	// $.get("../json/liebiao.json",function(data1){
	// 	//2.显示数据到页面上
	// 	//遍历data1数组，获取数组里的每个对象
	// 	//钻石重量
	// 	for(var i=0;i<data1.length;i++){
	// 		var aa=data1[i];
	// 		if(aa.page==0){//钻石重量
	// 			for(j=0;j<aa.Data.length;j++){
	// 				var bb=aa.Data[j];
	// 				var div=$("<div></div>")
	// 				if(j%2==0){
	// 					div.addClass("classfyone")
	// 				}else{
	// 					div.addClass("classfytwo")
	// 				}
	// 				$("<p><a href='#'>"+bb.name+"</a></p>").appendTo(div);
	// 				var div1=$("<div></div>");
	// 				for(var n=0;n<bb.data.length;n++){
	// 					var dataa=bb.data[n];
	// 					div1.append('<span><a>'+dataa+'</a></span>')
	// 				}
	// 				(div).append(div1);
	// 				$(".classfy").append(div)
	// 			}
	// 			$(".menuerleft").hover(function(){
	// 				$(".classfy").addClass("classfyed");
	// 				$(".menuerleft span").eq(1).addClass("hovered");
	// 			},function(){
	// 				$(".classfy").removeClass("classfyed");
	// 				$(".menuerleft span").eq(1).removeClass("hovered");
	// 			})
	//
	// 			$(".classfy").hover(function(){
	// 				$(".classfy").addClass("classfyed");
	// 				$(".menuerleft span").eq(1).addClass("hovered");
	// 			},function(){
	// 				$(".classfy").removeClass("classfyed");
	// 				$(".menuerleft span").eq(1).removeClass("hovered");
	// 			})
	//
	// 			$(".classfy .classfyone").hover(function(){
	// 				$(this).css("background","black")
	// 			},function(){
	// 				$(this).css("background","#373332")
	// 			})
	//
	// 			$(".classfytwo").hover(function(){
	// 				$(this).css("background","black")
	// 			},function(){
	// 				$(this).css("background","#312d2a")
	// 			})
	//
	//
	// 			//获取钻石的重量  跳转
	// 			$(".classfyone span").click(function(){
	// 				var id=$(this).text()
	// 				var id=id.replace("分","")
	// 			$(this).find("a").attr("href","list.html?"+id)
	// 			})
	//
	// 			//点击裸钻搜索跳转到钻石页面
	//
	// 			$(".homeline2right .p3").click(function(){
	// 				var minZuan=$(".stoneAll input").eq(0).val()
	// 			    var maxZuan=$(".stoneAll input").eq(1).val()
	// 				$(".homeline2right .p3 a").attr("href","list.html?"+minZuan+"&"+maxZuan);
	// 			})
	//
	//
	// 		}else if(aa.page==1){             //切换城市
	// 			for(j=0;j<aa.Data.length;j++){
	// 				var bb=aa.Data[j];
	// 				var div1=$("<div></div>")
	// 				var pa=("<p>"+bb.name+"</p>");
	// 				div1.append(pa);
	// 				for(var n=0;n<bb.data.length;n++){
	// 					var dataa=bb.data[n];
	// 					div1.append("<span><a href='#'>"+dataa+"</a></span>")
	// 				}
	// 				div1.addClass("changeone").appendTo($(".changeonee"));
	// 		     }
	// 			//点击切换   弹出城市列表
	// 			$(".topbar .chang").click(function(){
	// 				$(".change").css("display","block");
	// 				$("#bg").css("display","block");
	// 			})
	// 		    //给切换的弹出框添加点击事件
	// 		    $(".change p span").eq(0).click(function(){
	// 		    	$(".change").css("display","none")
	// 		    	$("#bg").css("display","none");
	// 		    })
	// 		    $(".change .changeone span").click(function(){
	// 		    	$(".tiyan").html("体验中心："+$(this).html())
	// 		    })
	// 	    }else if(aa.page==2){                       //轮播图
	// 			//轮播图
	// 			for(j=0;j<aa.Data.length;j++){
	// 				var bb=aa.Data[j];
	// 				//创建小圆
	// 				var li=$("<li></li>")
	// 				$("#list22").append(li);
	// 				for(var n=0;n<bb.data.length;n++){
	// 					var dataa=bb.data[n];
	// 					$("#listt").append("<li><img src = "+ dataa +" /></li>");
	// 				}
	// 				if(j==0){
	// 					$("#list22 li").addClass("active")
	// 				}
	// 		     }
	// 		    lunbo();
	// 		}
	//    }
				
		// function lunbo(){
		// 	var _list1 = $('#listt');
		// 	var _list2 = $('#list22');
		// 	var _li1 = $('#listt li');
		// 	var _li2 = $('#list22 li');
		// 	var size = $('#listt li').length;
		// 	var i = 0;  //即将显示的图片下标
		// 	//初始化
		// 	show();
		// 	var timer = setInterval(animation,3000)
		// 		//鼠标移入停止，移除继续
		// 		 $('#listt').on('mouseenter',function(){
        //             clearInterval(timer);
        //          }).on('mouseleave',function(){
        //             timer = setInterval(animation,3000);
        //          });
        //
        //         // 点击小图切换效果
	    //          $('#list22 li').on('click',function(){
	    //          	clearInterval(timer);
	    //         	console.log("hj")
	    //             i = $(this).index();
	    //             show();
	    //         });
		// 	 // 图片切换
        //     function animation(){
        //         i++;
        //         show();
        //     }
		// 	 function show(){
        //         if(i==size){
        //             i=0;
        //         }else if(i < 0){
        //             i= size - 1;
        //         }
        //         $('#listt').children('li').eq(i).animate({opacity:1}).siblings().animate({opacity:0});
        //         $('#list22').children('li').eq(i).css({'background':'orange'}).siblings().css({'background':'#656565'});
		// 	 }
		// }
    // })

	// 轮播图
	$(function () {
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			paginationClickable: true,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			autoplay: 2500,
			autoplayDisableOnInteraction: false
		});
	})
	
	
	
	
	
	
	
// 	//1.获取数据
// 	$.get("../json/area.json",function(data){
//
// 		//console.log(data);
//
// 		//2.显示数据到页面上
// 		//遍历data数组，将每个图片显示在页面上
// 		for(var i=0;i<data.length;i++){
// 			var obj=data[i];
// 			//创建li节点，并给其赋值
// 			$("#list").append("<li>"+obj.area+"</li>");
// 			$("#list li").addClass("lied")
//
// 			if(i==0){
// 				$("#list li").addClass("lied selected");
//
// 				//创建p节点，并给其赋值
// 				$("#list2").append("<p>"+obj.name+"</p>");
// 				$("#list2 p").eq(0).addClass("p1ed");
//
// 				$("#list2").append("<p>"+obj.address+"</p>");
// 				$("#list2").append("<p>"+obj.time+"</p>");
// 				$("#list2").append("<p>"+obj.phone+"</p>");
// 				$("#list2 p:gt(0)").addClass("p2ed");
//
// 				//创建img节点，并给其赋值
// 				var img=$("<img src="+data[0].src+"/>").addClass("maped");
//
//                 $("#mappicture").append(img);
// 			}
//
//
// 			//给每个选中的li添加事件（移入移出）
// 			$("#list li").each(function(){
// 				$(this).attr("index",i)
// 			})
// 			//给每个li添加一个下标
// 			$("#list li").hover(function(){
// 				var j=$(this).index();
// 				//console.log(j);
// 				//先移除所有兄弟元素选中的样式
// 				$(this).siblings().removeClass("selected");
// 				//给当前的元素添加选中的样式
// 				$(this).addClass("selected");
//
// //				//改变p节点中的值
//                 $("#list2 p").eq(0).html(data[j].name);
//                 $("#list2 p").eq(1).html(data[j].address);
//                 $("#list2 p").eq(2).html(data[j].time);
//                 $("#list2 p").eq(3).html(data[j].phone);
//
//                 //改变src的值
//                 $("#mappicture").find("img").attr("src",data[j].src)
// 			})
// 		}
//
// 	})
// //
// 	$(".Zxsone").hover(function(){
// 		$(this).css("opacity","0.8");
// 	},function(){
// 		$(this).css("opacity","1");
// 	});
// 	$(".Zxsone").eq(4).hover(function(){
// 		$(".Zxs .erweima").css("display","block");
// 		console.log("fg")
// 	},function(){
// 		$(".Zxs .erweima").css("display","none");
// 	});
// })