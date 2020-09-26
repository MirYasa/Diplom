const sendForms = () => {
    const loadMessage = 'Загрузка...',
        errorMessage = 'Что-то пошло не так',
        statussMessage = document.createElement('div'),
        thanks = document.querySelector('#thanks');

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

                    if (target.closest('.popup')) {
                        target.innerHTML = `     
                    <div class="overlay">
                    </div>
                    <div class="form-wrapper">
                        <div class="close-form">
                            <img src="images/close-icon.png" alt="close" class="close_icon">
                        </div>
                        <div class="form-content" style="color: #ffffff; font-size: 1.5em;">
                            <h4>Спасибо!</h4>
                            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
                            <button class="btn close-btn">OK</button>
                        </div>
                    </div>`;
                        statussMessage.textContent = '';
                    } else {
                        thanks.style.display = 'block';
                        statussMessage.textContent = '';
                    }
                }
            })
            .catch(() => {
                statussMessage.textContent = errorMessage;
            });
    });
};

export default sendForms;