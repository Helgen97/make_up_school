$(".up_btn").on('click', () => {
    $(document).scrollTop(0);
})

$("#mobile-menu_button").on("click", () => {
    $(".mobile-menu_modal").addClass("active");
})

$(".mobile_menu-modal_close-btn").on("click", () => {
    $(".mobile_menu-modal").removeClass("active");
})

$(".call_btn").on("click", () => {
    $(".call_modal").toggleClass("active");
});

[...$(".course_block .default-btn")].forEach((element) => {
    $(element).on('click', () => {
        $(".course-modal").toggleClass("active")
    })
});

$(document).mouseup(function (e) {
    var container = $(".mobile-menu_modal");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("active");
    }
});

$(document).mouseup(function (e) {
    var container = $(".course-modal");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("active");
    }
});

const swiper = new Swiper('.s-one', {
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
        1279: {
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
        clickable: true,
    },
});

const swiperTwo = new Swiper('.s-two', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 10000
    },
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination_two',
        clickable: true,
    },
});