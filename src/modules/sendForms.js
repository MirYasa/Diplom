const sendForms = () => {
    const loadMessage = 'Загрузка...',
        errorMessage = 'Что-то пошло не так',
        sucessMessage = 'Данные успешно отправленны',
        statussMessage = document.createElement('div');

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const target = event.target;

        target.append(statussMessage);
        statussMessage.style.cssText = `font-size: 2em; color: #ffffff;`;

        const postData = (body) => {
            return fetch('./server.php', {
                method: 'POST',
                body: new FormData(body)
            });
        };
        statussMessage.textContent = loadMessage;

        postData(target)
            .then((response) => {
                if (response.status === 200) {
                    statussMessage.textContent = sucessMessage;
                }
            })
            .catch(() => {
                statussMessage.textContent = errorMessage;
            });

    });
};

export default sendForms;