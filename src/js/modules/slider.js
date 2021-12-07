export default class Slider {
    constructor(sliderContainer, btns) {
        this.sliderContainer = document.querySelector(sliderContainer);
        this.slides = this.sliderContainer.children;
        this.btns = document.querySelectorAll(btns);
        this.currentSlide = 1;
    }

    showSlides(slideIndex) {
        // When we slide till the end, slider will come to first slider
        if (slideIndex > this.slides.length) {
            this.currentSlide = 1;
        }

        // Vise versa
        if (slideIndex < 1) {
            this.currentSlide = this.slides.length;
        }

        // Hide all sliders in page
        this.slides.forEach(slide => slide.style.display = 'none');

        // Show first slide
        this.slides[this.currentSlide - 1].style.display = 'block';
    }

    // Add or subtract slide
    plusSlides(slideIndex) {
        this.showSlides(this.currentSlide += slideIndex);
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                this.plusSlides(1);
            });

            // When click on D, show first slide
            btn.parentNode.previousElementSibling.addEventListener('click', e => {
                e.preventDefault();
                this.currentSlide = 1;
                this.showSlides(this.currentSlide);
            });
        });

        // Start first initialization
        this.showSlides(this.currentSlide);
    }
}