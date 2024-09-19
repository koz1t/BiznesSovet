const progressItems = document.querySelectorAll('.progress-list__item');
let maxProgress = 0;
let maxProgressItem = null;

// Найти элемент с максимальным значением прогресса
progressItems.forEach(item => {
  const progress = parseInt(item.getAttribute('data-progress'), 10);
  if (progress > maxProgress) {
    maxProgress = progress;
    maxProgressItem = item;
  }
});

// Установить ширину максимального прогресс бара в 100%
if (maxProgressItem) {
  maxProgressItem.querySelector('.progress-list__item-scale').style.width = '100%';
  const maxWidth = maxProgressItem.querySelector('.progress-list__item-scale').offsetWidth;

  // Установить ширину остальных прогресс баров
  progressItems.forEach(item => {
    if (item !== maxProgressItem) {
      const progress = parseInt(item.getAttribute('data-progress'), 10);
      const widthPx = (progress / maxProgress) * maxWidth;
      const rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);

      if (window.innerWidth < 376) {
        // На разрешении менее 376px установить ширину в процентах
        const widthPercentage = (progress / maxProgress) * 100;
        item.querySelector('.progress-list__item-scale').style.width = widthPercentage + '%';
      } else {
        // На разрешении 376px и более установить ширину в rem
        item.querySelector('.progress-list__item-scale').style.width = (widthPx / rootFontSize) + 'rem';
      }
    }
  });
}

// Обновить ширину прогресс баров при изменении размера окна
window.addEventListener('resize', () => {
  if (maxProgressItem) {
    maxProgressItem.querySelector('.progress-list__item-scale').style.width = '100%';
    const maxWidth = maxProgressItem.querySelector('.progress-list__item-scale').offsetWidth;

    progressItems.forEach(item => {
      if (item !== maxProgressItem) {
        const progress = parseInt(item.getAttribute('data-progress'), 10);
        const widthPx = (progress / maxProgress) * maxWidth;
        const rootFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);

        if (window.innerWidth < 376) {
          const widthPercentage = (progress / maxProgress) * 100;
          item.querySelector('.progress-list__item-scale').style.width = widthPercentage + '%';
        } else {
          item.querySelector('.progress-list__item-scale').style.width = (widthPx / rootFontSize) + 'rem';
        }
      }
    });
  }
});