import React from 'react';

function Card (props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button type="button" title="Удалить" aria-label="Удалить" className="card__delete-button"></button>
      <img className="card__image" alt={props.name} src={props.link} onClick={handleClick}/>
      <div className="card__description">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-container">
          <button type="button" title="Нравится" aria-label="Нравится" className="card__like-button"></button>
          <p className="card__like-count">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
