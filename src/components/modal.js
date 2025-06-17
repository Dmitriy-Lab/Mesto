
export function openModal(popup) {
    popup.classList.add('popup_is-opened');
    const closePopupButton = popup.querySelector('.popup__close')
    closePopupButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModalEsc);
    popup.addEventListener('click', closeModalOverlay);

    
}

function closeModalOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        closeModal();
    }
}

export function closeModal() {
    const popup = document.querySelector('.popup_is-opened');
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalEsc);
    popup.removeEventListener('click', closeModalOverlay);
}

function closeModalEsc(evt) {
    if (evt.key === "Escape") {
        closeModal();
    }
}
