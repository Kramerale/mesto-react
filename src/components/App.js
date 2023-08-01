import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  // const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page__container">
      <>
        <Header />
        <Main
          onEditAvatar = {handleEditAvatarClick}
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onCardClick = {handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name = {'profile'}
          title = {'Редактировать профиль'}
          ariaLabel = {'Попап для редактирования профиля'}
          isOpen = {isEditProfilePopupOpen}
          buttonText = {'Сохранить'}
          onClose = {closeAllPopups}
          children = {(
            <>
              <label className="popup__label" for="name-input">
                <input id="name-input" name="userName" type="text" placeholder="Имя" className="popup__input popup__input_type_name" minlength="2" maxlength="40" required />
                <span className="name-input-error"></span>
              </label>
              <label className="popup__label" for="occupation-input">
                <input id="occupation-input" name="userOccupation" type="text" placeholder="О себе" className="popup__input popup__input_type_occupation" minlength="2" maxlength="200" required />
                <span className="occupation-input-error"></span>
              </label>
            </>
          )}
        />
        <PopupWithForm
          name = {'add'}
          title = {'Новое место'}
          ariaLabel = {'Попап для добавления нового места'}
          isOpen = {isAddPlacePopupOpen}
          buttonText = {'Создать'}
          onClose = {closeAllPopups}
          children = {(
            <>
              <label className="popup__label" for="title-input">
                <input id="title-input" name="name" type="text" placeholder="Название" className="popup__input popup__input_type_place-name" minlength="2" maxlength="30" required />
                <span className="title-input-error"></span>
              </label>
              <label className="popup__label" for="link-input">
                <input id="link-input" name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-link" required />
                <span className="link-input-error"></span>
              </label>
            </>
          )}
        />
        <PopupWithForm
          name = {'avatar'}
          title = {'Обновить аватар'}
          ariaLabel = {'Попап для редактирования аватара'}
          isOpen = {isEditAvatarPopupOpen}
          buttonText = {'Сохранить'}
          onClose = {closeAllPopups}
          children = {(
            <>
              <label className="popup__label" for="avatarlink-input">
                <input id="avatarlink-input" name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar-link" required />
                <span className="avatarlink-input-error"></span>
              </label>
            </>
          )}
        />
        <ImagePopup
          card = {selectedCard}
          onClose = {closeAllPopups}
        />
      </>
    </div>
  );
}

export default App;
