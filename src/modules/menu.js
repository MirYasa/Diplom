const menu = () => {
    const clubsList = document.querySelector('.clubs-list ul'),
        popupMenu = document.querySelector('.popup-menu'),
        freeVisitForm = document.querySelector('#free_visit_form'),
        callbackForm = document.querySelector('#callback_form'),
        fixedGift = document.querySelector('.fixed-gift'),
        gift = document.querySelector('#gift');


    document.addEventListener('click', (event) => {
        const target = event.target;

        console.log(target);

        if (target.matches('.menu-btn-img')) {
            popupMenu.style.display = 'flex';

        } else if (target.matches('.close-btn-img') || target.closest('.scroll')) {
            popupMenu.style.display = 'none';

        } else if (target.closest('.club-select')) {
            clubsList.classList.toggle('hidden');

        } else if (target.closest('.free-visit') || target.matches('.open-popup')) {
            freeVisitForm.style.display = 'block';

        } else if (target.matches('.overlay') || target.matches('.close_icon')) {
            freeVisitForm.style.display = 'none';
            callbackForm.style.display = 'none';
            gift.style.display = 'none';

        } else if (target.closest('.callback-btn')) {
            callbackForm.style.display = 'block';

        } else if (target.closest('.fixed-gift')) {
            fixedGift.style.display = 'none';
            gift.style.display = 'block';

        } else if (!target.closest('.club-select')) {

            if (!clubsList.classList.contains('hidden')) {
                clubsList.classList.add('hidden');
            }

        }
    });
};
export default menu;