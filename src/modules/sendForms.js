const sendForms = () => {
    const loadMessage = 'Загрузка...',
        errorMessage = 'Что-то пошло не так',
        statussMessage = document.createElement('div'),
        freeVisitForm = document.querySelector('#free_visit_form'),
        callbackForm = document.querySelector('#callback_form'),
        thanks = document.querySelector('#thanks');

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const target = event.target,
            inputs = target.querySelectorAll('input');

        target.append(statussMessage);
        statussMessage.style.cssText = `font-size: 2em; color: #ffffff;`;

        const formData = new FormData(target),
            body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        console.log(target);

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
                        input.value = '';
                    });

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