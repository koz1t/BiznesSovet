const showMoreBtns = document.querySelectorAll('[data-show-more]');

showMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.parentNode;
    parent.classList.toggle('--open');
    const parentTop = parent.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: parentTop - 100,
      behavior: 'smooth'
    });
  })
});