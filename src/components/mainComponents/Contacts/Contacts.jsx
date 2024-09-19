import { useIntl } from "react-intl";
import ContactItems from "../../additionalComponents/ContactItems";

const Contacts = () => {
  const { formatMessage } = useIntl();

  return (
    <section id="contacts" className="contacts">
      <div className="grid-area">
        <h2>{formatMessage({ id: "contacts" })}</h2>
        <ContactItems />
      </div>
    </section>
  );
};

export default Contacts;
