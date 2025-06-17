import { cardTemplate, popupImage} from './consts.js';
import { openModal} from './modal.js';

// @todo: Функция создания карточки
export function createCard(cardData) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    cardElement.querySelector('.card__image').src = `${cardData.link}`;
    cardElement.querySelector('.card__title').textContent = `${cardData.name}`;

    deleteButton.addEventListener('click', function () {
        deleteCard(deleteButton);
    });

    addLike(cardElement);
    openImageModal(cardElement);

    return cardElement;
};

function addLike(cardElement) {
    const likeElement = cardElement.querySelector('.card__like-button');
    likeElement.addEventListener('click', () => likeElement.classList.toggle('card__like-button_is-active'));
}

function openImageModal(cardElement) {
    const ImageCard = cardElement.querySelector('.card__image');

    ImageCard.addEventListener('click', () => {
        openModal(popupImage);
        const modalIsOpened = document.querySelector('.popup_is-opened');
        const modalImage = modalIsOpened.querySelector('.popup__image');
        modalImage.src = cardElement.querySelector('.card__image').src;

        const modalImageCaption = modalIsOpened.querySelector('.popup__caption');
        modalImageCaption.textContent = cardElement.querySelector('.card__title').textContent;
})
}

// @todo: Функция удаления карточки
export function deleteCard(deleteButton) {
    const cardItem = deleteButton.closest('.places__item');
    cardItem.remove();
}
