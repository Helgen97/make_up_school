$(".up_btn").on('click', () => {
    $(document).scrollTop(0);
})

$(".mobile_menu-button").on("click", () => {
    $(".mobile_menu-modal").addClass("active");
})

$(".mobile_menu-modal_close-btn").on("click", () => {
    $(".mobile_menu-modal").removeClass("active");
})

$(".call_btn").on("click", () => {
    $(".call_modal").toggleClass("active");
})

$(document).mouseup(function (e) {
    var container = $(".mobile_menu-modal");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("active");
    }
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 10000
    },
    breakpoints: {
        319: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        743: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        1439: {
            slidesPerView: 3,
            spaceBetween: 32,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});