import { useState } from "react";
import { useIntl } from "react-intl";
import { Tooltip } from "react-tooltip";

const CallMeBoxModalForm = ({ sendContactsFunction }) => {
  const [contacts, setContacts] = useState({
    phoneNumber: "",
    userName: "Без імені",
  });

  const [isEmptyPhone, setEmptyPhoneError] = useState(false);

  const { formatMessage } = useIntl();

  const formSubmit = (event) => {
    event.preventDefault();
    if (contacts.phoneNumber === "") {
      setEmptyPhoneError(true);
      return;
    }
    setEmptyPhoneError(false);
    sendContactsFunction(contacts);
  };

  const changeInputHandle = (event) => {
    setContacts({
      ...contacts,
      phoneNumber: event.target.value,
    });
  };

  return (
    <form>
      <input
        id="modal-phone-input"
        type="tel"
        inputMode="tel"
        placeholder="+380(XX)XXXXXXX"
        value={contacts.phoneNumber}
        onChange={changeInputHandle}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      {isEmptyPhone && (
        <Tooltip
          anchorSelect="#modal-phone-input"
          className="tooltip"
          place="left"
          isOpen
        >
          {formatMessage({ id: "empty_phone" })}
        </Tooltip>
      )}

      <button className="default-btn" onClick={formSubmit}>
        {formatMessage({ id: "call_me_back" })}
      </button>
    </form>
  );
};

export default CallMeBoxModalForm;
