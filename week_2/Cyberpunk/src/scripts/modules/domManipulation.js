export function setActiveSlide(slider, index) {
    const slides = slider.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  
  export function scrollToElement(element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  