import './styles/index.css';

import { initialCards, cardPlace, popupImage, popupEdit, popupNewCard, profileImageButton, profileEditButton, addCardButton, profileTitle, profileDescription, inputProfileDescription, inputProfileTitle, popupEditForm, inputAddNewCard, inputCardLink, popupAddNewCardForm } from './components/consts.js';
import { createCard } from './components/card.js';
import { openModal, closeModal } from './components/modal.js';


// слушаем открытие модалок
profileImageButton.addEventListener('click', () => openModal(popupImage));
profileEditButton.addEventListener('click', () => {
    openModal(popupEdit);
    addPopupProfileValue();
});
addCardButton.addEventListener('click', () => openModal(popupNewCard));

// слушаем отправку форм
popupEditForm.addEventListener('submit', EditFormSubmit);
popupAddNewCardForm.addEventListener('submit', AddNewCardFormSubmit);

function addPopupProfileValue() {
    inputProfileTitle.value = profileTitle.innerHTML;
    inputProfileDescription.value = profileDescription.innerHTML;
}

function AddNewCardFormSubmit(evt) {
    evt.preventDefault();
    const newCard = {
      name: inputAddNewCard.value,
      link: inputCardLink.value,
    }
    initialCards.unshift(newCard);
    renderCards();
    closeModal();
}

function EditFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = inputProfileTitle.value;
    profileDescription.textContent = inputProfileDescription.value;
    closeModal();
}

// @todo: Вывести карточки на страницу
function renderCards () {
    cardPlace.innerHTML = '';
    initialCards.forEach((item) => {
    cardPlace.append(createCard(item));
});
} 

renderCards();
