const carouselSlider = () => {
    const servicesSlider = document.querySelector('.services-slider'),
        slides = servicesSlider.querySelectorAll('.slide');

    let count = 0;

    servicesSlider.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.prev')) {
            if (count > 4) {
                count = 0;
            }
            if (count < 0) {
                count = 0;
            }
            servicesSlider.removeChild(slides[count]);
            servicesSlider.append(slides[count]);
            count++;
        } else if (target.closest('.next')) {
            count--;
            if (count < 0) {
                count = 4;
            }
            if (count > 4) {
                count = 4;
            }
            servicesSlider.removeChild(slides[count]);
            servicesSlider.prepend(slides[count]);
        }
    });
};

export default carouselSlider;