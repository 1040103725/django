$(function () {
    $('img').each(function () {
        var imgPath = $(this).attr('src')
        var imgpa = imgPath.slice(3,)

        imgPath = "{% static '" + imgpa + "' %}"
        $(this).attr('src', imgPath)
    })
    console.log($('body').html())
})