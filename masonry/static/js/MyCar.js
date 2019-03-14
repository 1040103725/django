$(function(){
	
	
	
	var uid = location.search;
	var Cookie,sum1=0,sum2=0,sum3=0,size,name,caizhi;
	//从cookie中获取购物车的所有商品
	var arr = $.cookie("cart");
	if (arr) {
		$(".cartp").css("display","none");
	    $(".carshop").removeClass("carshoped")
	    $(".carshop ul").css("display","block")
	    $(".carshop .linetop2").css("display","block")
	    $(".bottom").css("display","block")
		
		
		arr = JSON.parse(arr); 
		//遍历数组, 显示所有商品的信息
		for (var i=0; i<arr.length; i++){
			size=arr[i].size;
			caizhi=arr[i].caizhi;
			name=arr[i].name;
			//动态创建一条商品信息
			var li=$("<li></li>")
			//商品
			var span=$("<span></span>");
			span.addClass("picture1");
			var img=$('<img src="'+arr[i].src+'"/>');
			span.append(img);
			li.append(span)
			
			//型号
		    span2=$("<span></span>");
			span2.addClass("spanlove2");
			var a=$("<a></a>")
			a.attr("href","shopinfo.html?"+arr[i].id);
			a.append(arr[i].name+",");
			a.append("材质："+arr[i].caizhi);
			a.append("镶口："+arr[i].size);
			span2.append(a)
			li.append(span2)
			
			//尺寸
			var span3=$("<span></span>");
			span3.addClass("spanlove3");
			span3.html(arr[i].caizhi);
			li.append(span3)
			
			//刻字内容
			var span4=$("<span></span>");
			span4.addClass("spanlove4");
//			var str=arr[i].content.replace(//g,"")
			span4.html(arr[i].content)
			console.log(span4.html(arr[i].content))
			li.append(span4)
			
			//市场价格
			price1=Number(arr[i].scprice.replace("￥","")) ;
			var span5=$("<span></span>");
			span5.addClass("spanlove5");
			span5.html("￥"+price1+".00");
			li.append(span5)
			
			//优惠
			var price2=Number(arr[i].shopprice.replace("￥",""));
			var disprice=price1-price2;
			var span6=$("<span></span>");
			span6.addClass("spanlove6");
			span6.html("￥"+disprice+".00");
			li.append(span6)
			
			//成交价
			var span7=$("<span></span>");
			span7.addClass("spanlove7");
			span7.html("￥"+price2+".00");
			li.append(span7)
			
			//操作
			//删除
			var span8=$("<span></span>");
			span8.addClass("spanlove8");
			var span8a=$("<span></span>");
			span8a.addClass("delete");
			span8a.html("删除");
			span8.append(span8a)
			
			
			//修改
			var span8b=$("<span></span>");
			span8b.addClass("change2");
			span8b.html("修改");
			span8.append(span8b)
			li.append(span8)
			$(".carshop ul").append(li);
			
			//计算购物车中的商品件数
			length=$(".carshop ul li").length;
			$(".num1").html(length)
			$(".zero1").html(length)
			
		//	//计算购物车中的商品总金额
		    sum1+=price1;
		    $(".total1") .html("￥"+sum1+".00");
		    
		    //计算购物车中的商品优惠总金额
		    sum2+=disprice;
		    $(".discount") .html("￥"+sum2+".00");
		    
		    //计算购物车中的商品订单总金额
		    sum3+=price2;
		    $(".total") .html("￥"+sum3+".00");
			
            
		}
		
		
		
		
		
		
		
		
					
	}else{
		$(".cartp").css("display","block");
        $(".carshop").addClass("carshoped")
        $(".carshop ul").css("display","none")
        $(".carshop .linetop2").css("display","none")
        $(".bottom").css("display","none")
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(".spanlove2 a").hover(function(){
		$(this).css("color","#db3962");
	},function(){
		$(this).css("color","black");
	})
	//点击型号跳转页面
	$(".spanlove2").click(function(){
		var str=$(".spanlove2 a").html()
		var arr=str.split(",");
		var proName=arr[0];
		$(".spanlove2 a").attr("href","shopinfo.html?"+proName)
	})
	
	//清空购物车
	$(".clear1").hover(function(){
		$(this).css("color","#db3962");
	},function(){
		$(this).css("color","black");
	})
	//弹出对话框是否清空购物车
	$(".clear1").click(function(){
		$(".changea").css("display","block");
		$("#bga").css("display","block");
		$(".num").html("确定清空珠宝箱吗？")
		var changea=document.getElementsByClassName("changea")[0];
		var bga=document.getElementById("bga");
        $(".pdeng span").click(function(){
            $(".changea").css("display","none");
            $("#bga").css("display","none");
        })
        $(".changea .button").click(function(){
            $(".changea").css("display","none");
            $("#bga").css("display","none");
            $.cookie("cart", "", {expires:0, path:"/"}); //清空cookie
            window.history.go(0)
            
        })
        $(".giveup").click(function(){
            $(".changea").css("display","none");
            $("#bga").css("display","none");
        })
	})
	//继续购物
	$(".go").click(function(){
		location.href="index.html";
	})
	
	//删除
	$(".delete").hover(function(){
		$(this).css("color","red")
	},function(){
		$(this).css("color","black")
	})
	$(".delete").click(function(){
		var self = $(this);
		$(".changea").css("display","block");
		$("#bga").css("display","block");
		$(".num").html("确定删除珠宝箱商品吗？")
		$(".pdeng span").click(function(){
		    $(".changea").css("display","block");
		    $("#bga").css("display","block");
		})
		$(".giveup").click(function(){
		    $(".changea").css("display","none");
		    $("#bga").css("display","none");
		})
		$(".changea .button").click(function(){
			$(".changea").css("display","none");
			$("#bga").css("display","none");
			var goodslist = JSON.parse($.cookie("cart"));
			//购物车的商品件数
			$(".num1").html(length)
			$(".zero1").html(length)
			goodslist.splice(self.parents("li").index(),1);//清除商品信息
			$.cookie("cart", JSON.stringify(goodslist), {expires:30, path:"/"});
			Cookie=JSON.parse($.cookie("cart"))
			console.log(Cookie.length)
			self.parents("li").remove();
			window.history.go(0)
			
			//-
		//	//计算购物车中的商品总金额
		   var count_Price1=self.parents("li").find(".spanlove5").html().replace("￥","")
		   var count_Price2=self.parents("li").find(".spanlove6").html().replace("￥","")
		   var count_Price3=self.parents("li").find(".spanlove7").html().replace("￥","")
		    sum1-=parseInt(count_Price1);
		    $(".total1") .html("￥"+sum1+".00");
//		    
		    //计算购物车中的商品优惠总金额
		    sum2-=parseInt(count_Price2);
		    $(".discount") .html("￥"+sum2+".00");
		    
		    //计算购物车中的商品订单总金额
		    sum3-=parseInt(count_Price3);
		    $(".total") .html("￥"+sum3+".00");
			
			
			if(Cookie.length==0){
				console.log("hhhhh")
				$(".cartp").css("display","block");
		        $(".carshop").addClass("carshoped")
		        $(".carshop ul").css("display","none")
		        $(".carshop .linetop2").css("display","none")
		        $(".bottom").css("display","none")
			}
			
//			setTimeout(function(){
//				window.history.go(0)
//			},1000)
            
            
		})
	})
	
    
	//修改
	$(".change2").hover(function(){
		$(this).css("color","red")
	},function(){
		$(this).css("color","black")
	})
	$(".change2").click(function(){
		$(".changea").css("display","block");
		$("#bga").css("display","block");
		
		$(".num").css("display","none");
		$(".zuankou").css("display","block");
        $(".pdeng span").click(function(){
            $(".changea").css("display","block");
            $("#bga").css("display","block");
        })
        $(".changea .button").click(function(){  //确定按钮
            $(".changea").css("display","none");
            $("#bga").css("display","none");
            var val=$("#weight").val();
            console.log(typeof val)
            size=val;
            $(".spanlove2 a").html(name+","+"材质:"+caizhi+",镶口:"+size)
//          window.history.go(0)
            
        })
        $(".giveup").click(function(){
            $(".changea").css("display","none");
            $("#bga").css("display","none");
        })
	})
})
