$(function () {
    $('.imgcar .tianjia1').click(function () {
        console.log('+')
        var sid = $(this).attr('sid')
        $.get('/addCar/', {'sid': sid}, function (response) {
            console.log(response)
            if (response.status == -1) {
                window.open('/onload/', target = '_self')
            }
            if (response.status == 1) {
                window.open('/MyCar/', target = '_self')
            }
        })
        $('.imgcar .jiansao1').click(function () {
            console.log('-')
            var sid = $(this).attr('sid')
            var $that = $(this)
            $.get('/subCar/', {'sid': sid}, function (response) {
                console.log(response)
                if (response.status == -1) {
                    window.open('/onload/', target = '_self')
                }
                if (response.status == 1) {
                    var number = parseInt(response['number'])
                    if (number > 0) {
                        $that.next().html(response['number'])
                    } else {
                        $that.next().hide()
                        $that.hide()
                    }
                }

            })
        })
    })


})

