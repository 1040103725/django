$(function(){
	//1.获取数据
	$.get("../json/zixun.json",function(data){
		
		//console.log(data);
		
		//2.显示数据到页面上
		//遍历data数组，将每个图片显示在页面上
		for(var i=0;i<data.length;i++){
			var dd=data[i];
			for(var j=0;j<dd.length;j++){
				var obj=dd[j];
				//创建li节点，并给其赋值
				var div=$("<div></div>");
				div.append("<img src="+obj.img+"/>");
				$("."+obj.class+" img").eq(j+1).addClass("img1ed")
				div.append("<a>"+obj.write+"</a>");
//				$("."+obj.class+" a").eq(j).href=obj.href;
				$("."+obj.class+" a").eq(j).addClass("aed")
				$("."+obj.class).append(div)
		   }
		}
	})	
})