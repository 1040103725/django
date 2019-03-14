$(function(){
	$(".contentright .rightthree div").hover(function(){
		$(this).children().eq(0).css("color","red");
		$(this).children().eq(1).css("border-top"," 5px solid red");
	},function(){
		$(this).children().eq(0).css("color","black");
		$(this).children().eq(1).css("border-top"," 5px solid black");
	})
	
	$.get("../json/shoplist.json",function(data){
		var self;
		for(var i=0;i<data.length;i++){
			var obj=data[i];
			self=obj;
			var a=$("<a></a>");
			a.attr("href","shopinfo.html?"+parseInt(obj.id))
			a.attr("target","_blank")
			var div1=$("<div></div>")
			div1.addClass("rightfourimg");//包含商品的div
			
			var div2=$("<div></div>");//商品图片的div
			div2.addClass("div33");//商品图片的div添加样式
			
			var img=$("<img src='"+obj.src+"'/img>")//商品图片
			img.appendTo(a);
			
			a.appendTo(div2);
			div2.appendTo(div1);
			var a1=$("<a></a>");
			a1.attr("href","shopinfo.html?"+parseInt(obj.id))
			a1.attr("target","_blank")
			var p=$("<p>"+obj.name+"</p>");//商品名称
			p.appendTo(a1);
			a1.appendTo(div1);
			var div3=$("<div></div>");//商品价格的div
			div3.addClass("p22");//给商品价格的div添加样式
			var div5=$("<div>"+obj.content1+"<span>"+obj.content2+"</span></div>");//市场价格
			div5.addClass("div11");
			var div6=$("<div>"+obj.content3+"<span>"+obj.content4+"</span></div>");//商城价格
			div6.addClass("div22");
			div5.appendTo(div3);
			div6.appendTo(div3);
			div3.appendTo(div1)
			$(".rightfour").append(div1)
			
		}
		$(".rightfourimg").click(function(){
			//要加入最近浏览记录的商品信息
			var goodssrc=$(this).find("img").attr("src");
			var goodsname=$(this).find("p").text();
			var arr = $.cookie("tourist") ? JSON.parse( $.cookie("tourist") ) : [];
			
			
		    var isExist = false; //表示是否存在该商品
			for(var i=0; i<arr.length; i++) {
				//如果存在该商品, 把数量增加
				if (goodsname == arr[i].name) {
					arr[i].num++;
					isExist = true; //表示存在该商品
				}
			}
					
			//如果不存在, 则添加一个新商品
			if (!isExist) {
				//商品对象
				var goods = {
					src: goodssrc,
					name: goodsname,
					num: 1 //商品数量
				}
				arr.push(goods);
			}
			//保存到cookie中
			$.cookie("tourist", JSON.stringify(arr), {expires:30, path:"/"});
		})
	})
	$("#div1 i").click(function(){
		$(this).parent().css("color","red")
		$("#div1 ul").css("display","none")
		$("#div1 i").css("background","url(../img/showbg.png) no-repeat")
		$(this).css("background","url(../img/hidebg.png) no-repeat")
		$(this).parent().parent().find("ul").css("display","block")
		$(this).parent().parent().find("ul li").hover(function(){
		     $(this).css("color","red")
		},function(){
			 $(this).css("color","black")
		})
	})
	
})