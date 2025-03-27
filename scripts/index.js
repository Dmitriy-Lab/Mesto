import { initialCards } from './cards.js';

// @todo: Темплейт карточки и DOM узлы
const cardTemplate = document.querySelector('#card-template').content;
const cardPlace = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData, deleteCard) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    cardElement.querySelector('.card__image').src = `${cardData.link}`;
    cardElement.querySelector('.card__title').textContent = `${cardData.name}`;

    deleteButton.addEventListener('click', function () {
        deleteCard(deleteButton);
    });
    return cardElement;
};

// @todo: Функция удаления карточки
function deleteCard(deleteButton) {
    const cardItem = deleteButton.closest('.places__item');
    cardItem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    cardPlace.append(createCard(item, deleteCard));
})


