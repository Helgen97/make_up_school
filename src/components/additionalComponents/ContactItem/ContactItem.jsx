const ContactItem = ({ textPosition, itemSvg, itemHref, itemText }) => {
  return (
    <div className={"contact-item " + textPosition}>
      {itemSvg}
      {itemHref ? (
        <a href={itemHref} className="contact-link">
          {itemText}
        </a>
      ) : (
        <p className="contact-link">{itemText}</p>
      )}
    </div>
  );
};

export default ContactItem;
