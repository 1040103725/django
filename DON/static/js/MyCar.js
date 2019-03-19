$(function () {
    // total()

    // 添加按钮
    $('.glyphicon-plus-sign').click(function () {
        console.log('+')
        var shopID = $(this).attr('shopID')
        var $that = $(this)
        $.get('/addshop/', {'shopID': shopID}, function (response) {
            console.log(response)
            if (response.status == -1) {
                window.open('/onload/', target = '_self')
            }
            if (response.status == 1) {
                var number = parseInt(response['number'])
                if (number > 0) {
                    $that.prev().html(response['number'])
                    $that.prev().show()
                    $that.prev().prev().show()

                } else {
                    $that.prev().hide()
                    $that.hide()

                }
            }
        })
    })

    // 减少按钮
    $('.glyphicon-minus-sign').click(function () {
        console.log('+')
        var shopID = $(this).attr('shopID')
        var $that = $(this)
        $.get('/subshop/', {'shopID': shopID}, function (response) {
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

    // 单选
    $('.clickthis').click(function () {
        console.log('+aaa')
        var cartid = $(this).attr('cartid')
        var $span = $(this).find('span')
        $.get('/statusCar/', {'cartid': cartid}, function (response) {
            console.log(response)
            if (response.status) {
                var isselect = response.isselect
                if (isselect) {
                    $span.removeClass('no').addClass('glyphicon glyphicon-ok')
                } else {
                    $span.removeClass('glyphicon glyphicon-ok').addClass('no')
                }
            }
            total()
        })

    })

    // 全选
    $('#clear1').click(function () {
        console.log('+')
        var isall = $(this).attr('isall')
        isall = (isall == 'false') ? true : false
        $(this).attr('isall', isall)
        console.log(isall)
        var $that = $(this)
        if (isall) {
            $that.removeClass('no').addClass('glyphicon glyphicon-ok')
        } else {
            $that.removeClass('glyphicon glyphicon-ok').addClass('no')
        }
        $.get('/isallCar/', {'isall': isall}, function (response) {
            console.log(response)
            if (response.status) {
                $('.clickthis').each(function () {
                    if (isall) {
                        $(this).find('span').removeClass('no').addClass('glyphicon glyphicon-ok')
                    } else {
                        $(this).find('span').removeClass('glyphicon glyphicon-ok').addClass('no')
                    }
                })
                total()
            }
        })
    })


    // 计算总和
    function total() {
        var sum = 0
        $('.carts2').each(function () {
            var $clickthis = $(this).find('.clickthis')
            var $showthis = $(this).find('.showthis')
            if ($clickthis.find('.glyphicon-ok').length) {
                var nums = $showthis.find('.spanlove4').attr('nums')
                console.log(nums)
                var prices = $showthis.find('.spanlove7').attr('prices')
                console.log(prices)
                sum += nums * prices
            }
        })
        console.log(sum)
        $('.total').html(sum.toFixed(2))
    }

    // 下单
    $('#generateorder').click(function () {
        $.get('/generateorder/', function (response) {
            console.log(response)
            if (response.status == 1) {
                var idenrifier = response['idenrifier']
                window.open('/orderdetail/' + idenrifier + '/', '_self')
            }
        })
    })
    $('.delete').click(function () {
        // console.log('删除')
        $.get('/removeshop/',function (response) {
            console.log(response)
        })
    })
})