function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")){
        $(target).html("more info").removeClass("active")
    } else {
        $(target).html("less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}