import { useState } from "react";
import { useIntl } from "react-intl";

const CallMeBoxModalForm = ({ sendContactsFunction }) => {
  const [contacts, setContacts] = useState({
    phoneNumber: "",
    userName: "Без імені",
  });

  const { formatMessage } = useIntl();

  const formSubmit = (event) => {
    event.preventDefault();
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
        type="tel"
        inputMode="tel"
        placeholder="+380(XX)XXXXXXX"
        value={contacts.phoneNumber}
        onChange={changeInputHandle}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />

      <button className="default-btn" onClick={formSubmit}>
        {formatMessage({ id: "call_me_back" })}
      </button>
    </form>
  );
};

export default CallMeBoxModalForm;
