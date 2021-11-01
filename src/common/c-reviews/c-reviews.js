const swiper = new Swiper('.js-swiper', {
    autoplay: {
        delay: 5000
    },


    navigation: {
        prevEl: '.c-reviews__button--prev',
        nextEl: '.c-reviews__button--next'
    },
    effect: 'fade'
})