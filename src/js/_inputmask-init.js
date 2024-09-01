const inputsPhone = document.querySelectorAll('input[name="phone"]');

const im = new Inputmask('+7 (999) 999 99 99');

im.mask(inputsPhone);