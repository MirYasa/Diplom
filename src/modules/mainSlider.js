const mainSlider = () => {
    const slider = document.querySelector('.main-slider'),
        slides = slider.querySelectorAll('.slide');

    let count = 0;

    const autoPlay = () => {
        if (count > 3) {
            count = 0;
            slides[count + 4].style.display = 'none';
        slides[count].style.display = 'flex';
        } else {
            count++;
        slides[count - 1].style.display = 'none';
        slides[count].style.display = 'flex';
        }
        
    };

    setInterval(autoPlay, 3000);
};
export default mainSlider;