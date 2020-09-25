/* eslint-disable indent */
/* eslint-disable arrow-body-style */
const calculator = () => {
    const cardOrder = document.querySelector('#card_order'),
        priceTotal = document.querySelector('#price-total'),
        priceMessage = document.querySelector('.price-message input');

    let month1 = 1999,
        month6 = 9990,
        month9 = 13990,
        month12 = 19990,
        currentMonth;

    const giftPrice = (sum) => {
        return Math.ceil(sum - (sum * 0.3));
    };

    cardOrder.addEventListener('change', (e) => {
        const target = e.target;

        if (target.matches('#card_leto_schelkovo')) {
            month1 = 2999;
            month6 = 14990;
            month9 = 21990;
            month12 = 24990;

            switch (currentMonth) {
                case 2999:
                    currentMonth = 1999;
                    break;
                case 14990:
                    currentMonth = 9990;
                    break;
                case 21990:
                    currentMonth = 13990;
                    break;
                case 24990:
                    currentMonth = 19990;
                    break;
            }

            switch (currentMonth) {
                case 1999 || giftPrice(1999):
                    if (priceMessage.value === 'ТЕЛО2019') {
                        priceTotal.textContent = giftPrice(month1);
                    } else {
                        priceTotal.textContent = month1;
                    }

                    break;
                case 9990 || giftPrice(9990):
                    if (priceMessage.value === 'ТЕЛО2019') {
                        priceTotal.textContent = giftPrice(month6);
                    } else {
                        priceTotal.textContent = month6;
                    }

                    break;
                case 13990 || giftPrice(13990):
                    if (priceMessage.value === 'ТЕЛО2019') {
                        priceTotal.textContent = giftPrice(month9);
                    } else {
                        priceTotal.textContent = month9;
                    }

                    break;
                case 19990 || giftPrice(19990):
                    if (priceMessage.value === 'ТЕЛО2019') {
                        priceTotal.textContent = giftPrice(month12);
                    } else {
                        priceTotal.textContent = month12;
                    }
                    break;
            }

        } else if (target.matches('#card_leto_mozaika')) {
            month1 = 1999;
            month6 = 9990;
            month9 = 13990;
            month12 = 19990;

            switch (currentMonth) {
                case 1999:
                    currentMonth = 2999;
                    break;
                case 9990:
                    currentMonth = 14990;
                    break;
                case 13990:
                    currentMonth = 21990;
                    break;
                case 19990:
                    currentMonth = 24990;
                    break;
            }

            switch (currentMonth) {
                case 2999 || giftPrice(2999):
                    if (priceMessage.value === 'ТЕЛО2019') {
                        priceTotal.textContent = giftPrice(month1);
                    } else {
                        priceTotal.textContent = month1;
                    }

                    break;
                case 14990 || giftPrice(14990):
                    if (priceMessage.value === 'ТЕЛО2019') {
                        priceTotal.textContent = giftPrice(month6);
                    } else {
                        priceTotal.textContent = month6;
                    }
                    break;
                case 21990 || giftPrice(21990):
                    if (priceMessage.value === 'ТЕЛО2019') {
                        priceTotal.textContent = giftPrice(month9);
                    } else {
                        priceTotal.textContent = month9;
                    }
                    break;
                case 24990 || giftPrice(24990):
                    if (priceMessage.value === 'ТЕЛО2019') {
                        priceTotal.textContent = giftPrice(month12);
                    } else {
                        priceTotal.textContent = month12;
                    }
                    break;
            }

        } else if (target.closest('.price-message')) {
            if (priceMessage.value === 'ТЕЛО2019') {
                priceTotal.textContent = giftPrice(priceTotal.textContent);
            }
        }

        if (priceMessage.value === 'ТЕЛО2019') {
            if (target.closest('#m1')) {
                priceTotal.textContent = giftPrice(month1);
                currentMonth = month1;

            } else if (target.closest('#m2')) {
                priceTotal.textContent = giftPrice(month6);
                currentMonth = month6;

            } else if (target.closest('#m3')) {
                priceTotal.textContent = giftPrice(month9);
                currentMonth = month9;

            } else if (target.closest('#m4')) {
                priceTotal.textContent = giftPrice(month12);
                currentMonth = month12;
            }

        } else {
            if (target.closest('#m1')) {
                priceTotal.textContent = month1;
                currentMonth = month1;

            } else if (target.closest('#m2')) {
                priceTotal.textContent = month6;
                currentMonth = month6;

            } else if (target.closest('#m3')) {
                priceTotal.textContent = month9;
                currentMonth = month9;

            } else if (target.closest('#m4')) {
                priceTotal.textContent = month12;
                currentMonth = month12;
            }
        }
    });
};

export default calculator;