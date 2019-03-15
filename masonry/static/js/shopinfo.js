$(function () {
	$('.imgcar .tianjia1').click(function () {
		// console.log('+')
		var sid = $(this).attr('sid')
		$.get('/addcat/',{'sid':sid},function (response) {
			console.log(response)
			if(response.status == 1){
				window.open('/mycar/',target='_self')
			}
			if(response.status == -1){
				window.open('/onload/',target='_self')
			}
		})
		// $('.imgcar .tianjia1').click(function () {
		// 	// console.log('-')
		// 	var sid = $(this).attr('sid')
		// 	var $that = $(this)
		// 	$.get('/subcat/',{'sid':sid}),function (response) {
		// 		// console.log(response)
		// 		if (response.status ==  1){
		// 			window.open('/onload/',target='_self')
		// 		}
		// 		if(response.status == 1){
		// 			var number = parseInt(response['number'])
		// 			if(number > 0){
		// 				$that.next().html(response['number'])
		// 			}
		// 			else {
		// 				$that.next().hide()
		// 				$that.hide()
		// 			}
		// 		}
		// 	}
		// })
	})
})