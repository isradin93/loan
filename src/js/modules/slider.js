export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }

    showSlides(n) {
        // When we slide till the end, slider will come to first slider
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        // Vise versa
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        // Hide all slides in page
        this.slides.forEach(slide => slide.style.display = 'none');

        // Show first slide
        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });
        });

        this.showSlides(this.slideIndex);
    }
}