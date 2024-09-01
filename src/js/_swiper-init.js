new Swiper('.swiper:not(.swiper--3)', {
  slidesPerView: 1,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 500,
  // autoplay: {
  //   delay: 3000,
  // },
  breakpoints: {
    376: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  }
});

new Swiper('.swiper--3', {
  slidesPerView: 1,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 500,
  // autoplay: {
  //   delay: 3000,
  // },
  breakpoints: {
    551: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});