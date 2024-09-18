const bannerSliders = document.querySelectorAll('.banner-slider');

if (bannerSliders.length > 0) {

  bannerSliders.forEach(slider => {
    const
      slides = slider.querySelectorAll('.banner-slider__slide'),
      pagination = slider.querySelector('.banner-slider__pagination'),
      paginationItems = slider.querySelectorAll('.banner-slider__pagination-item');
    let
      currentSlide = 0;

    const resetClass = (els, className) => {
      els.forEach(el => {
        el.classList.remove(className);
      });
    }

    const switchSlide = (index) => {
      if (slides.length > 0) {
        slides[currentSlide].classList.remove('banner-slider__slide--active');
        slides[index].classList.add('banner-slider__slide--active');
        if (slides.length == paginationItems.length) {
          paginationItems[currentSlide].classList.remove('banner-slider__pagination-item--active');
          paginationItems[index].classList.add('banner-slider__pagination-item--active');
        }
        slider.style.height = `${slides[index].offsetHeight}px`;

        // Получаем .banner-slider__slide-column активного слайда и его нижнюю точку
        const activeSlideColumn = slides[index].querySelector('.banner-slider__slide-column');
        if (activeSlideColumn) {
          const columnHeight = activeSlideColumn.offsetHeight;
          const slidePaddingTop = parseFloat(window.getComputedStyle(slides[index]).paddingTop);
          pagination.style.top = `${slidePaddingTop + columnHeight}px`;
        }

        // Выводим внутренний отступ сверху текущего слайда
        const slidePaddingTop = window.getComputedStyle(slides[index]).paddingTop;
        console.log(`Внутренний отступ сверху текущего слайда: ${slidePaddingTop}`);
      }
      currentSlide = index;
    }

    if (slides.length > 0) {
      resetClass(slides, 'banner-slider__slide--active');
      if (slides.length == paginationItems.length) {
        resetClass(paginationItems, 'banner-slider__pagination-item--active');
        paginationItems.forEach((item, index) => {
          item.addEventListener('click', () => {
            switchSlide(index);
          })
        });
      }
      switchSlide(currentSlide);
    }

    resetClass(slides, 'banner-slider__slide--active');
    slides[currentSlide].classList.add('banner-slider__slide--active');
  });
}