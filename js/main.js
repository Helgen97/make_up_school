$(".up_btn").on('click', () => {
    $(document).scrollTop(0);
})

$(".mobile_menu-button").on("click", () => {
    $(".mobile_menu-modal").addClass("active");    
})

$(".mobile_menu-modal_close-btn").on("click", () => {
    $(".mobile_menu-modal").removeClass("active");
})

$(document).mouseup(function (e) {
    var container = $(".mobile_menu-modal");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("active");
    }
});