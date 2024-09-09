export class Slider {
    constructor(slider) {
      this.slider = slider;
      this.slides = slider.querySelectorAll('.slide');
      this.currentIndex = 0;
      this.interval = setInterval(() => this.next(), 5000);
    }
  
    next() {
      this.slides[this.currentIndex].classList.remove('active');
      
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      
      this.slides[this.currentIndex].classList.add('active');
    }
    
    static create(slider) {
      return new Slider(slider);
    }
  }