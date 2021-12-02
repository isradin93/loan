export default class Slider {
    constructor(sliderContainer, btns) {
        this.sliderContainer = document.querySelector(sliderContainer);
        this.sliders = this.sliderContainer.children;
        this.btns = document.querySelectorAll(btns);
        this.currentSlide = 1;
    }

    showSlides(slideIndex) {
        // When we slide till the end, slider will come to first slider
        if (slideIndex > this.sliders.length) {
            this.currentSlide = 1;
        }

        // Vise versa
        if (slideIndex < 1) {
            this.currentSlide = this.sliders.length;
        }

        // Hide all sliders in page
        this.sliders.forEach(slide => slide.style.display = 'none');

        // Show first slide
        this.sliders[this.currentSlide - 1].style.display = 'block';
    }

    // Add or subtract slide
    plusSlides(slideIndex) {
        this.showSlides(this.currentSlide += slideIndex);
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });

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