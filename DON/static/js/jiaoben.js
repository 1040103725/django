$(function () {
    $('img').each(function () {
        var imgPath = $(this).attr('src').replace('../','')
        imgPath = "{% static '"+ imgPath +"' %}"
        $(this).attr('src',imgPath)
    })
    console.log($('body').html())
})