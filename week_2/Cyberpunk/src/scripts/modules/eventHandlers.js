import { scrollToElement } from './domManipulation.js';

export function handleClick(event) {
  if (event.target.matches('.learn-more')) {
    const targetElement = document.querySelector('#buy-game');
    scrollToElement(targetElement);
  }
}
