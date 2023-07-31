import React from 'react';

function PopupWithForm (props) {
  return (
    //props.name для section и атрибут name в теге form должны быть одинаковы. Мб нужно будеть поменять названия файлов и стили в css
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
    // <>
    //   <section className="popup popup_type_profile" aria-label="Попап для редактирования профиля пользователя">
    //     <div className="popup__container">
    //       <button type="button" title="Закрыть" aria-label="Закрыть" className="popup__close-button"></button>
    //       <h2 className="popup__heading">Редактировать профиль</h2>
    //       <form name="profile" className="popup__form popup__form_type_profile" novalidate>
    //         <label className="popup__label" for="name-input">
    //           <input id="name-input" name="userName" type="text" placeholder="Имя" className="popup__input popup__input_type_name" minlength="2" maxlength="40" required />
    //           <span className="name-input-error"></span>
    //         </label>
    //         <label className="popup__label" for="occupation-input">
    //           <input id="occupation-input" name="userOccupation" type="text" placeholder="О себе" className="popup__input popup__input_type_occupation" minlength="2" maxlength="200" required />
    //           <span className="occupation-input-error"></span>
    //         </label>
    //         <button type="submit" className="popup__submit-button">Сохранить</button>
    //       </form>
    //     </div>
    //   </section>

    //   <section className="popup popup_type_add" aria-label="Попап для добавления фотографий">
    //     <div className="popup__container">
    //       <button type="button" title="Закрыть" aria-label="Закрыть" className="popup__close-button"></button>
    //       <h2 className="popup__heading">Новое место</h2>
    //       <form name="add" className="popup__form popup__form_type_add" novalidate>
    //         <label className="popup__label" for="title-input">
    //           <input id="title-input" name="name" type="text" placeholder="Название" className="popup__input popup__input_type_place-name" minlength="2" maxlength="30" required />
    //           <span className="title-input-error"></span>
    //         </label>
    //         <label className="popup__label" for="link-input">
    //           <input id="link-input" name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-link" required />
    //           <span className="link-input-error"></span>
    //         </label>
    //         <button type="submit" className="popup__submit-button">Создать</button>
    //       </form>
    //     </div>
    //   </section>

    //   <section className="popup popup_type_avatar" aria-label="Попап для обновления аватара">
    //     <div className="popup__container">
    //       <button type="button" title="Закрыть" aria-label="Закрыть" className="popup__close-button"></button>
    //       <h2 className="popup__heading">Обновить аватар</h2>
    //       <form name="avatar" className="popup__form popup__form_type_avatar" novalidate>
    //         <label className="popup__label" for="avatarlink-input">
    //           <input id="avatarlink-input" name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar-link" required />
    //           <span className="avatarlink-input-error"></span>
    //         </label>
    //         <button type="submit" className="popup__submit-button">Сохранить</button>
    //       </form>
    //     </div>
    //   </section>
//ЧТО ДЕЛАТЬ С ПОПАПОМ CONFIRM??
    //   <section className="popup popup_type_confirm" aria-label="Попап для подтверждения удаления карточки с фотографией">
    //     <div className="popup__container">
    //       <button type="button" title="Закрыть" aria-label="Закрыть" className="popup__close-button"></button>
    //       <h2 className="popup__heading">Вы уверены?</h2>
    //       <form name="confirm" className="popup__form popup__form_type_confirm" novalidate>
    //         <button type="submit" className="popup__submit-button">Да</button>
    //       </form>
    //     </div>
    //   </section>
    // </>
  );
}

export default PopupWithForm;
