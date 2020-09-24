const gallerySlider = () => {
    const slider = document.querySelector('.gallery-slider'),
        slides = slider.querySelectorAll('.slide'),
        sliderDots = document.querySelector('.slider-dots');

    let currentSlide = 0,
        interval,
        dot;

    const getDots = () => {
        slides.forEach(() => {
            dot = document.createElement('li');
            sliderDots.append(dot);
        });

    };
    getDots();

    const dots = document.querySelectorAll('.slider-dots li');

    const stopSlide = () => {
        clearInterval(interval);
    };

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlay = () => {
        prevSlide(slides, currentSlide, 'slide-change');
        prevSlide(dots, currentSlide, 'slick-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'slide-change');
        nextSlide(dots, currentSlide, 'slick-active');
    };

    slides[0].classList.add('slide');
    dots[0].classList.add('slick-active');

    const startSlide = () => {
        interval = setInterval(autoPlay, 4000);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        prevSlide(slides, currentSlide, 'slide-change');
        prevSlide(dots, currentSlide, 'slick-active');

        if (target.closest('.next')) {
            currentSlide++;
        } else if (target.closest('.prev')) {
            currentSlide--;
        } else if (target.matches('.slider-dots li')) {
            dots.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide, 'slide-change');
        nextSlide(dots, currentSlide, 'slick-active');

    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots li')) {
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if (event.target.closest('.slider-arrow') || event.target.closest('.slider-dots li.slider-dots li')) {
            startSlide();
        }
    });

    startSlide();
};

export default gallerySlider;