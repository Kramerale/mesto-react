import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main (props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
    .then(cardData => {
      setCards(cardData);
    })
  }, [])

  React.useEffect(() => {
    api.getUserInfo()
    .then(userInfo => {
      setUserName(userInfo.name);
      setUserDescription(userInfo.about);
      setUserAvatar(userInfo.avatar);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__user">
          <button type="button" title="Обновить аватар" aria-label="Обновить аватар" className="profile__edit-avatar" onClick={props.onEditAvatar}>
            <img alt="Аватар пользователя" className="profile__avatar" src={userAvatar} />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" title="Редактировать" aria-label="Редактировать" className="profile__edit-button" onClick={props.onEditProfile}></button>
            <p className="profile__occupation">{userDescription}</p>
          </div>
        </div>
        <button type="button" title="Добавить" aria-label="Добавить" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements" aria-label="Фотокарточки пользователя">
        <ul className="elements__card-list">
          {cards.map(card =>
            <Card
              card = {card}
              name = {card.name}
              link = {card.link}
              likes = {card.likes.length}
              onCardClick = {props.onCardClick}
            />
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
