import React from 'react';

function PopupWithForm (props) {
  return (

    <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} aria-label={props.ariaLabel}>
      <div className="popup__container">
        <button type="button" title="Закрыть" aria-label="Закрыть" className="popup__close-button" onClick={props.onClose}></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form name={props.name} className={`popup__form popup__form_type_${props.name}`} novalidate>
          {props.children}
          <button type="submit" className="popup__submit-button">{props.buttonText}</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
