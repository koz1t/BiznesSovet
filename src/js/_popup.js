const popupInit = (popup, callers) => {
  if (popup) {
    const btns = document.querySelectorAll(callers);

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        popup.classList.add('popup--active');
        const form = popup.querySelector('.feedback-form');
        if (form) {
          form.reset();
          (form.querySelectorAll('.feedback-form__input--error')).forEach(input => {
            input.classList.remove('feedback-form__input--error');
          });
          (form.querySelectorAll('.feedback-form__agreement--error')).forEach(input => {
            input.classList.remove('feedback-form__agreement--error');
          });
        }
      })
    });

    popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__content') || e.target.closest('.popup__close')) {
        popup.classList.remove('popup--active');
      }
    })
  }
}

const feedbackPopup = document.querySelector('#feedback-popup');
popupInit(feedbackPopup, '[data-popup-feedback]');