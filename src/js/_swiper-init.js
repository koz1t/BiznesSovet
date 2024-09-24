new Swiper('.swiper:not(.swiper--3, .portfolio, .tariffs)', {
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

new Swiper('.tariffs', {
  slidesPerView: 1,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 500,

  breakpoints: {
    376: {
      slidesPerView: 1.3,
    },
    481: {
      slidesPerView: 1.5,
    },
    769: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }
});