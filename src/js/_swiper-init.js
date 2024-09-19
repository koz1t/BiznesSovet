new Swiper('.swiper:not(.swiper--3, .portfolio)', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 500,
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
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 500,
  breakpoints: {
    551: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});

new Swiper('.portfolio', {
  slidesPerView: 1,
  autoHeight: true,
  allowTouchMove: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  speed: 500,
});