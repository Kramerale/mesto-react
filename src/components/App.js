import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);
  // const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  React.useEffect(() => {
    api.getUserInfo()
    .then(userInfo => {
      setCurrentUser(userInfo);
    })
    .catch(console.error)
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
    .then(cardData => {
      setCards(cardData);
    })
    .catch(console.error)
  }, [])

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

  function handleCardLike (card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if(!isLiked) {
      api.addCardLike(card._id)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      })
      .catch(console.error)
    } else {
      api.deleteCardLike(card._id)
      .then(newCard => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      })
      .catch(console.error)
    }
  }

  function handleCardDelete (card) {
    api.deleteUserCard(card._id)
    .then(() => {
      setCards(cardList => cardList.filter(c => c._id !== card._id));
    })
    .catch(console.error)
  }

  function handleUpdateUser (data) {
    api.editUserInfo(data)
    .then(newUserInfo => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    })
    .catch(console.error)
  }

  function handleUpdateAvatar (data) {
    api.editUserAvatar(data)
    .then(newUserAvatar => {
      setCurrentUser(newUserAvatar);
      closeAllPopups();
    })
    .catch(console.error)
  }

  function handleAddPlaceSubmit (data) {
    api.addCard(data)
    .then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(console.error)
  }

  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="page__container">
        <Header />
        <Main
          onEditAvatar = {handleEditAvatarClick}
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onCardClick = {handleCardClick}
          onCardLike = {handleCardLike}
          onCardDelete = {handleCardDelete}
          cards = {cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen = {isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          onUpdateUser = {handleUpdateUser}
        />
        <AddPlacePopup
          isOpen = {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
          onUpdateCardList = {handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen = {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          onUpdateAvatar = {handleUpdateAvatar}
        />

        <ImagePopup
          card = {selectedCard}
          onClose = {closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
