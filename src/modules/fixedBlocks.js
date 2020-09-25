const fixedBlocks = () => {
    const totop = document.querySelector('#totop'),
        menuButton = document.querySelector('.menu-button'),
        topMenu = document.querySelector('.top-menu'),
        headSlider = document.querySelector('.head-slider');

    totop.style.display = 'none';
    document.addEventListener('scroll', () => {

        if (headSlider.getBoundingClientRect().y < -400) {
            totop.style.display = 'block';
        } else {
            totop.style.display = 'none';
        }

        if (document.documentElement.clientWidth < 768) {
            if (menuButton.getBoundingClientRect().y < 0) {
                topMenu.style.position = 'fixed';
            }
            if (headSlider.getBoundingClientRect().y > 0) {
                topMenu.style.position = 'relative';
            }
        }
    });
};
export default fixedBlocks;