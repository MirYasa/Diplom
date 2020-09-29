const sendForms = () => {
    const loadMessage = 'Загрузка...',
        errorMessage = 'Что-то пошло не так',
        statussMessage = document.createElement('div'),
        freeVisitForm = document.querySelector('#free_visit_form'),
        callbackForm = document.querySelector('#callback_form'),
        thanks = document.querySelector('#thanks'),
        priceTotal = document.querySelector('#price-total');

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const target = event.target,
            inputs = target.querySelectorAll('input'),
            radio = [];

        target.append(statussMessage);
        statussMessage.style.cssText = `font-size: 2em; color: #ffffff;`;

        const formData = new FormData(target),
            body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };
        statussMessage.textContent = loadMessage;

        postData(body)
            .then((response) => {
                if (response.status === 200) {
                    inputs.forEach((input) => {
                        if (input.type === 'hidden') {
                            return;
                        } else if (input.type === 'checkbox') {
                            input.checked = false;
                        } else if (input.type === 'radio') {
                            radio.push(input);
                            radio[0].checked = true;
                        } else {
                            input.value = '';
                        }
                    });
                    priceTotal.textContent = 1999;
                    thanks.style.display = 'block';
                    statussMessage.textContent = '';
                    setTimeout(() => {
                        thanks.style.display = 'none';
                        freeVisitForm.style.display = 'none';
                        callbackForm.style.display = 'none';
                    }, 3000);

                }
            })
            .catch(() => {
                statussMessage.textContent = errorMessage;
            });
    });

};

export default sendForms;