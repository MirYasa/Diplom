/* eslint-disable strict */
'use strict';
const calculator = () => {
    const cardOrder = document.querySelector('#card_order'),
        priceTotal = document.querySelector('#price-total'),
        priceMessage = document.querySelector('.price-message input'),
        cardLetoMozaika = document.querySelector('#card_leto_mozaika'),
        cardLetoSchelkovo = document.querySelector('#card_leto_schelkovo');

    let month1 = 1999,
        month6 = 9990,
        month9 = 13990,
        month12 = 19990,
        currentPrice = 0;

    const giftPrice = (sum) => {
        return Math.ceil(sum - (sum * 0.3));
    };

    cardOrder.addEventListener('input', (event) => {
        const target = event.target;

        if (cardLetoMozaika.checked) {
            month1 = 1999;
            month6 = 9990;
            month9 = 13990;
            month12 = 19990;
        } else if (cardLetoSchelkovo.checked) {
            month1 = 2999;
            month6 = 14990;
            month9 = 21990;
            month12 = 24990;
        }
        if (target.closest('#m1')) {
            priceTotal.textContent = month1;
            currentPrice = month1;

        } else if (target.closest('#m2')) {
            priceTotal.textContent = month6;
            currentPrice = month6;

        } else if (target.closest('#m3')) {
            priceTotal.textContent = month9;
            currentPrice = month9;

        } else if (target.closest('#m4')) {
            priceTotal.textContent = month12;
            currentPrice = month12;
        }

        if (priceMessage.value === 'ТЕЛО2019') {
            priceTotal.textContent = giftPrice(priceTotal.textContent);
        } else {
            priceTotal.textContent = currentPrice;
        }
    });
};
calculator();