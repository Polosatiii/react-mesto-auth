function ImagePopup(props) {
  return (
    <div
      className={`popup popup_fuul-size-photo ${
        props.isOpen ? "popup_is-open" : ""
      }`}
      onClick={props.onClose}
    >
      <div
        className="popup__container-photo"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close"
        />
        <figure className="popup__figure">
          <img
            className="popup__image"
            src={props.card ? props.card.link : ""}
            alt={props.card ? props.card.name : ""}
          />
          <figcaption className="popup__image-caption">
            {props.card ? props.card.name : ""}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
