const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(tooltip => {
  const btn = tooltip.querySelector('.tooltip__btn');
  if (btn) {
    btn.addEventListener('click', () => {
      tooltip.classList.toggle('tooltip--active');
    })
  }

  tooltip.addEventListener('click', (e) => {
    if (tooltip.classList.contains('tooltip--popup')) {
      if (!e.target.closest('.tooltip__btn') && (!e.target.closest('.tooltip__content') || e.target.closest('.tooltip__close'))) {
        tooltip.classList.remove('tooltip--active');
      }
    } else {
      if (!e.target.closest('.tooltip__content') && !e.target.closest('.tooltip__btn')) {
        tooltip.classList.remove('tooltip--active');
      }
    }
  })
});