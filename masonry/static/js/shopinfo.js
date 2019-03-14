$(function(){
//	 window.onload=function(){
         
         
         
         //产品信息距离屏幕顶端的距离
		
//	        window.onscroll=function(){
////	            var box=document.getElementsByTagName("box2");
//	            var scrollTop = document.documentElement.scrollTop
//	                    || document.body.scrollTop;
//	            if(scrollTop<=0){
//	            	$(".contenttworighttop").css({
//	            		"position":"fixed",
//	            		"top":0
//	            	})
////	                box.style.position="fixed";
////	                box.style.top=0+'px';
//	                console.log("du")
//	            }
////	            else {
////	                box.style.position="absolute";
////	                box.style.top=500+"px";
////	            }
//	        }
	    
         
         
//   }

         
       //李易  
//       $(window).scroll(scrollOp1);
//	function scrollOp1(){
//		var currentTop = $(this).scrollTop();
//		if (currentTop >= 2900 && currentTop <= 26000){
//			$("#dajiaSeeTop").addClass("fixed");
//		}else{
//			$("#dajiaSeeTop").removeClass("fixed");			
//		}	
//	}






	 function fangDajing(src2){
	 	//放大镜
	    var _smallImg = $("#smallImg"); //小图
		var _smallArea = $("#smallArea"); //小区域
		var _bigImg = $("#bigImg"); //大图
		var _bigArea = $("#bigArea"); //大区域
		$("#bigImg").attr("src",src2)		
		//bigImg.width / smallImg.width = bigArea.width/smallArea.width
		//smallArea.width = bigArea.width * smallImg.width / bigImg.width
		//计算小区域的宽高
		//width() == innnerWidth() == outerWidth()
		_smallArea.width( _bigArea.width() * _smallImg.width() / _bigImg.width() );
		_smallArea.height( _bigArea.height() * _smallImg.height() / _bigImg.height() );
				
		//放大系数/放大倍数
		var scale = _bigImg.width() / _smallImg.width();  
		//scale = 4
				
				
		//mousemove
		_smallImg.mousemove(function(e){
			_smallArea.show(); //显示小区域
			_bigArea.show();
						
			//clientX: 可视区域的x值
			//pageX: 距离窗口左边的x值
			var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
			var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2; 
			//console.log(e.clientX);
			//console.log(e.pageX);
						
			//控制小区域范围在小图内
			if (x <= 0) { //不超出左边
				x = 0;
			}
			else if (x >= _smallImg.width()-_smallArea.width()) { //不超出右边
				x = _smallImg.width()-_smallArea.width();
			}
			if (y <= 0) { //不超出上边
				y = 0;
			}
			else if (y >= _smallImg.height()-_smallArea.height()) { //不超出下边
				y = _smallImg.height()-_smallArea.height();
			}
						
						
			//移动小区域
			_smallArea.css({left: x, top: y});
						
			//移动大图
			_bigImg.css({left: -x*scale, top: -y*scale});
					
		})
				
		//mouseleave
		_smallImg.mouseleave(function(){
			_smallArea.hide(); //隐藏小区域
			_bigArea.hide();
		})
	 }
		//获取../json/shoplist.json
		var goodIndex=location.search.replace("?","");
		var shop,kind="18k",num=0;
		$.get("../json/shoplist.json",function(data){
			for(var i=0;i<data.length;i++){
				obj=data[i];
				if(goodIndex==obj.id){
					shop = data[i];
					var p=$("<p></p>")
					var span=$("<span>产品名称：</span>")
					span.addClass("spanone");
					p.append(span);
					var span1=$("<span>"+obj.name2+"</span>");//商品名称
					p.append(span1);
					p.appendTo($(".add"));//动态创建p节点  添加到div.add上     //产品名称
					
					
					var p1=$("<p></p>")
					var span11=$("<span>市场价格：</span>")
					span11.addClass("spanone");
					p1.append(span11);
					span12=$("<span>"+obj.content2+"</span>");//市场价格   全局变量
					span12.css({
						"color":"#888888",
						"text-decoration":"line-through",
						"font-weight":"bold"
					})
					p1.append(span12);
					p1.appendTo($(".add"));//动态创建p节点  添加到div.add上     //市场价格
//					
					var p2=$("<p></p>")
					var span21=$("<span>商城价格：</span>")
					span21.addClass("spanone");
					p2.append(span21);
					span22=$("<span>"+obj.content4+"</span>");//商城价格    全局变量
					span22.css("color","red")
					p2.append(span22);
					p2.appendTo($(".add"));//动态创建p节点  添加到div.add上     //商城价格  
					
					$("#smallImg img").attr("src",obj.src)  //没点击小图片之前的大图片的放大镜
					src23=$("#smallImg img")[0].src
					fangDajing(src23)
					
					//改变大图片的src
			        $(".contenttworightimg img").attr("src",obj.src)
					
					//添加小图片
					if(obj.src1.length){
						var div1=$("<div></div>")
						div1.addClass("icon1");
						$(".contentoneleftbottom").append(div1)
						for(var j=0;j<obj.src1.length;j++){
							
							var objj=obj.src1[j];
							var box=$("<box></box>");
							box.addClass("box1");
							var img=$("<img src='"+objj+"'/>")
							box.append(img);
							$(".contentoneleftbottom").append(box)
							
//							var infodiv=$("<div></div>");
//							infodiv.addClass("contenttworightimg");
//							var infoimg=$("<img src='"+objj+"'/>");
//							infodiv.append(infoimg)
//							$(".contenttworightimg").append(infodiv)
						}
						var div2=$("<div></div>")
							div2.addClass("icon2");
							$(".contentoneleftbottom").append(div2)
						
						var oshowimg=document.getElementById("showimg");
                        $(".contentoneleftbottom img").each(function(){//给每个小图片一个点击事件  让大图片的src等于小图片的src
                            
                            $(this).click(function(){
                            	$("#showimg").attr("src",$(this)[0].src)
                            	src22=$(this)[0].src
                                fangDajing(src22)
                            })
                            
                        })
                        $(".contentoneleftbottom .box1").hover(function(){
				         	$(this).css("border","1px solid brown");
				        },function(){
				         	$(this).css("border","1px solid #dddddd");
				        })
							
						
					}
					
				}
				
					//改变选用材质
					var flag1=false;
					
					$(".ks").click(function(){
						$(this).parent().children().removeClass("spancolored");
						$(this).addClass("spancolored")
						$(this).parent().children().mouseleave()
						$(this).unbind("mouseleave") //data是要移除的函数
					})
//					
					$(".ks").on("mouseenter",function(){
						$(this).addClass("spancolored")
					}).on("mouseleave",function(){
						$(this).removeClass("spancolored")
//						$(".ks").eq(0).addClass("spancolored")
					})
			}
			
			//改变市场价格和商城价格
			//不同的材质
			var price1=Number(span12.html().replace("￥","")) ;//旧市场价格
			var price2=Number(span22.html().replace("￥","")) ;//旧商城价格
			$("#ks").click(function(){
				span12.html("￥"+5746+".00")  //新市场价格
				span22.html("￥"+3024+".00")  //新商场价格
				kind=$("#ks").html();
				
			})
			$("#ks1").click(function(){
				span12.html("￥"+5906+".00")  //新市场价格
				span22.html("￥"+3184+".00")  //新商场价格
				kind=$("#ks1").html();
				
			})
			$("#ks2").click(function(){
				span12.html("￥"+6066+".00")  //新市场价格
				span22.html("￥"+3344+".00")  //新商场价格
				kind=$("#ks2").html();
			})
			
			
			
			
		    //钻石的重量
		    function Weight(){
		    	$("#weight").click(function(){
			    	var arr=$("#weight").val().split("-");
			        var num=arr[1].replace("分","")   //45
			        if(num>=0&&num<50){
				    	span12.html("￥"+5746+".00")  //新市场价格
						span22.html("￥"+3024+".00")  //新商场价格
				    }else if(num>=50&&num<100){
				    	span12.html("￥"+5946+".00")  //新市场价格
						span22.html("￥"+3224+".00")  //新商场价格
				    }else if(num>=100&&num<150){
				    	span12.html("￥"+6146+".00")  //新市场价格
						span22.html("￥"+3424+".00")  //新商场价格
				    }
			        
			    })
		    }
		    Weight();
		    
		    //钻石的尺寸
		    function Size(){
		    	$("#size").click(function(){
			        var num1=$("#size").val()   //4
			        if(num1>=4&&num1<7){
				    	span12.html("￥"+5746+".00")  //新市场价格
						span22.html("￥"+3024+".00")  //新商场价格
				    }else if(num1>=7&&num1<9.5){
				    	span12.html("￥"+5854+".00")  //新市场价格
						span22.html("￥"+3264+".00")  //新商场价格
				    }else if(num1>=9.5&&num1<12){
				    	span12.html("￥"+6046+".00")  //新市场价格
						span22.html("￥"+3024+".00")  //新商场价格
				    }
			        
			    })
		    }
		    Size();
		  
		     //加入珠宝箱
		     //刻字      
//			//判断是否有错
		    $("#dianji").click(function(){
		    	var strId=document.getElementById("scart")
		    	var str=strId.value.replace(/ /g, "");
			var reg = /^[\u4e00-\u9fa5a-z\d_]{0,4}$/gi;   //中文
			var reg1=/^[a-zA-Z]/gi;
			    if (reg.test(str)||reg1.test(str)){
					var arr=$(".topbarleft #hello").text().split(",")
	//				console.log(arr[0])
	                //先获取之前保存在cookie中的用户
					users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
								
					//遍历users数组, 判断是否存在该用户,如果存在则不能注册
					for(var i=0; i<users.length; i++) {
						if ( arr[0] == users[i].name ) {
//							console.log("添加购物车成功")
//                           $(".zero1").html("");
                            num++;
                            $(".zero1").html(num);
							//要加入购物车的商品信息
							var goodsId = shop.id;
							var goodsName = shop.name3;
							var goodsscPrice = shop.content2; 
							var goodsshopPrice = shop.content4; 
							var goodsSize=$("#weight").val(); 
							var goodsCaizhi=kind; 
							var goodsSrc=shop.src;
							var goodscontent=$("#scart").val();
							console.log(goodscontent)
							
							//获取之前保存在cookie中的购物车信息
							var arr0 = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
							
							//遍历查找是否之前的购物车cookie中存在即将添加的商品
							var isExist = false; //表示是否存在该商品
							//如果不存在, 则添加一个新商品
							if (!isExist) {
								//商品对象
								var goods = {
									src:goodsSrc,
									id: goodsId,
									name: goodsName,
									scprice: goodsscPrice,
									shopprice:goodsshopPrice,
									size:goodsSize,
									caizhi:goodsCaizhi,
									src:goodsSrc,
									content:goodscontent
//									num: 1 //商品数量
								}
								arr0.push(goods);
								//alert($.cookie("cart"))
							}
							
							//保存到cookie中
							$.cookie("cart", JSON.stringify(arr0), {expires:30, path:"/"});
							console.log( $.cookie("cart") );
							
							
							//跳转
							location.href="MyCar.html?id="+100
							
//							return;
						}else{
							$(".changea").css("display","block");
							$("#bga").css("display","block");
							//设置延时器隐藏登录弹出框
							var changea=document.getElementsByClassName("changea")[0];
					        var bga=document.getElementById("bga");
					        $(".changeoneea .num").html("请先登录！")
		                    
		                    $(".pdeng span").click(function(){
		                    	$(".changea").css("display","none");
		                    	 $("#bga").css("display","none");
		                    })
		                     $(".changea .button").click(function(){
		                    	$(".changea").css("display","none");
		                    	 $("#bga").css("display","none");
		                    })
							
						}
					}
				}else{
					$(".changea").css("display","block");
					$("#bga").css("display","block");
					//设置延时器隐藏登录弹出框
					var changea=document.getElementsByClassName("changea")[0];
			        var bga=document.getElementById("bga");
			        $(".changeoneea .num").html("输入的钻戒刻字字符过多！")
                    
                    $(".pdeng span").click(function(){
                    	$(".changea").css("display","none");
                    	 $("#bga").css("display","none");
                    })
                     $(".changea .button").click(function(){
                    	$(".changea").css("display","none");
                    	 $("#bga").css("display","none");
                    })
				}
		   })
		    //从cookie中获取购物车的所有商品
				var arr = $.cookie("tourist");
				if (arr) {
					arr = JSON.parse(arr); 
					console.log(arr.length)
					
					
					//遍历数组, 显示所有商品的信息
					for (var i=0; i<arr.length; i++) {
						var div=$("<div></div>")
						div.addClass("contenttwoleft3bottom");
						var img=$('<img src="'+arr[i].src+'"/>')
						div.append(img);
						var p=$("<p>"+arr[i].name+"</p>");
						p.css("margin-top","10px")
						div.append(p);
						$(".contenttwoleft3").append(div)
					}
					
				}
		})

        
       
					   





		
		
			
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
})