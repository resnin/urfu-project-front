new Swiper('.header-slider', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        1400: {
            slidesPerView: 3,
            autoplay: false,
            allowTouchMove: false
        },
        800: {
            slidesPerView: 2,
        },
    }
})

new Swiper('.product-slider', {
    navigation: {
        prevEl: ".button-prev",
        nextEl: ".button-next",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        1362: {
            slidesPerView: 4
        },
        856: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 2,
        }
    }
})