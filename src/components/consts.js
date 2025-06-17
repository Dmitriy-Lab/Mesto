export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

// @todo: Темплейт карточки и DOM узлы
export const cardTemplate = document.querySelector('#card-template').content;
export const cardPlace = document.querySelector('.places__list');
// попапы
export const popupImage = document.querySelector('.popup_type_image');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupNewCard = document.querySelector('.popup_type_new-card');
// кнопки для открытия попапов
export const profileImageButton  = document.querySelector('.profile__image');
export const profileEditButton  = document.querySelector('.profile__edit-button');
export const addCardButton  = document.querySelector('.profile__add-button');

// данные профиля 
export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');

// инпуты попапов
export const inputProfileTitle = document.querySelector('.popup__input_type_name');
export const inputProfileDescription = document.querySelector('.popup__input_type_description');
export const inputAddNewCard = document.querySelector('.popup__input_type_card-name');
export const inputCardLink = document.querySelector('.popup__input_type_url');

// формы попапов
export const popupEditForm = popupEdit.querySelector('.popup__form');
export const popupAddNewCardForm = popupNewCard.querySelector('.popup__form');