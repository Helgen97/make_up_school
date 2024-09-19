import { useState } from "react";
import { useIntl } from "react-intl";

const LeaveContactsScreenForm = ({ sendContactsFunction }) => {
  const [contacts, setContacts] = useState({
    phoneNumber: "",
    userName: "",
  });

  const { formatMessage } = useIntl();

  const formSubmit = (event) => {
    event.preventDefault();
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
          type="tel"
          value={contacts.phoneNumber}
          placeholder="+38 XXX XXX XX XX"
          onChange={changePhoneInputHandle}
        />
        <button className="default-btn" onClick={formSubmit}>
          {formatMessage({ id: "help_with_course" })}
        </button>
      </form>
    </div>
  );
};

export default LeaveContactsScreenForm;
