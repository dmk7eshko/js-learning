import { handleClick } from './modules/eventHandlers.js';
import { Slider } from './modules/Slider.js';
import { FormValidator } from './modules/FormValidator.js';

document.addEventListener('click', handleClick);

const slider = Slider.create(document.querySelector('.slider'));

const formValidator = FormValidator.create(document.querySelector('#game-form'));

document.querySelector('#game-form').addEventListener('submit', event => {
  event.preventDefault();
  formValidator.submit();
});
