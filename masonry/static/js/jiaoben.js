$(function () {
    $('img').each(function () {
        var imgpath = $(this).attr('src').slice(3,)

        imgPath = "{% static '" + imgpath + "' %}"
        $(this).attr('src',imgPath)
    })
    console.log($('body').html())
})