document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.feedback-form');

  forms.forEach(form => {
    const inputs = form.querySelectorAll('.feedback-form__input input');
    const fakeSubmitButton = form.querySelector('.feedback-form__submit.btn');
    const realSubmitButton = form.querySelector('button[type="submit"]');
    const agreementCheckbox = form.querySelector('input[name="agreement"]');
    const agreementLabel = form.querySelector('.feedback-form__agreement');

    form.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        fakeSubmitButton.click();
      }
    });

    fakeSubmitButton.addEventListener('click', () => {
      let isValid = true;

      inputs.forEach(input => {
        const inputWrapper = input.closest('.feedback-form__input');
        input.value = input.value.trim();
        if (!input.value) {
          inputWrapper.classList.add('feedback-form__input--error');
          isValid = false;
        } else {
          inputWrapper.classList.remove('feedback-form__input--error');
        }

        if (input.name === 'phone') {
          const phonePattern = /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/;
          if (!phonePattern.test(input.value)) {
            inputWrapper.classList.add('feedback-form__input--error');
            isValid = false;
          } else {
            inputWrapper.classList.remove('feedback-form__input--error');
          }
        }
      });

      if (!agreementCheckbox.checked) {
        agreementLabel.classList.add('feedback-form__agreement--error');
        isValid = false;
      } else {
        agreementLabel.classList.remove('feedback-form__agreement--error');
      }

      if (isValid) {
        console.log(true);
        // realSubmitButton.click();
      }
    });
  });
});