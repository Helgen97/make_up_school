import { useState } from "react";
import { useIntl } from "react-intl";
import { Tooltip } from "react-tooltip";

const LeaveContactsScreenForm = ({ idName, sendContactsFunction }) => {
  const [contacts, setContacts] = useState({
    phoneNumber: "",
    userName: "",
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

  const changePhoneInputHandle = (event) => {
    setContacts({
      ...contacts,
      phoneNumber: event.target.value,
    });
  };

  const changeNameInputHandle = (event) => {
    setContacts({
      ...contacts,
      userName: event.target.value,
    });
  };

  return (
    <div>
      <form className="callback-screen_form">
        <input
          type="text"
          value={contacts.userName}
          placeholder={formatMessage({ id: "your_name?" })}
          onChange={changeNameInputHandle}
        />
        <input
          id={idName}
          className="leave_contacts"
          type="tel"
          value={contacts.phoneNumber}
          placeholder="+38 XXX XXX XX XX"
          onChange={changePhoneInputHandle}
        />
        {isEmptyPhone && (
          <Tooltip
            anchorSelect={`#${idName}`}
            className="tooltip"
            place="left"
            isOpen
          >
            {formatMessage({ id: "empty_phone" })}
          </Tooltip>
        )}
        <button className="default-btn" onClick={formSubmit}>
          {formatMessage({ id: "help_with_course" })}
        </button>
      </form>
    </div>
  );
};

export default LeaveContactsScreenForm;
