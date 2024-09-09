document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.feedback-form');

  forms.forEach(form => {
    const inputs = form.querySelectorAll('.feedback-form__input input');
    const agreementCheckbox = form.querySelector('input[name="agreement"]');
    const agreementLabel = form.querySelector('.feedback-form__agreement');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
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
        form.submit();
      }
    })
  });
});