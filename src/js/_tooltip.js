const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(tooltip => {
  const btn = tooltip.querySelector('.tooltip__btn');
  if (btn) {
    btn.addEventListener('click', () => {
      tooltip.classList.toggle('tooltip--active');
      if (tooltip.classList.contains('tooltip--active')) {
        window.addEventListener('click', outsideClickListener);
      } else {
        window.removeEventListener('click', outsideClickListener);
      }
    });
  }

  tooltip.addEventListener('click', (e) => {
    if (tooltip.classList.contains('tooltip--popup') || window.innerWidth < 992) {
      if (!e.target.closest('.tooltip__btn') && (!e.target.closest('.tooltip__content') || e.target.closest('.tooltip__close'))) {
        tooltip.classList.remove('tooltip--active');
        window.removeEventListener('click', outsideClickListener);
      }
    } else {
      if (!e.target.closest('.tooltip__content') && !e.target.closest('.tooltip__btn')) {
        tooltip.classList.remove('tooltip--active');
        window.removeEventListener('click', outsideClickListener);
      }
    }
  });

  function outsideClickListener(event) {
    if (!tooltip.contains(event.target) && !event.target.closest('.tooltip__btn')) {
      tooltip.classList.remove('tooltip--active');
      window.removeEventListener('click', outsideClickListener);
    }
  }
});