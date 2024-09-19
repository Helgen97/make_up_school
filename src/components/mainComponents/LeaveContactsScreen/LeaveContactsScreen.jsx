import { useIntl } from "react-intl";
import LeaveContactsScreenMainBlock from "../../additionalComponents/LeaveContactsScreenMainBlock";

const LeaveContactsScreen = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="callback">
      <div className="callback_screen grid-area">
        <h2>{formatMessage({ id: "leave_contacts_screen_title" })}</h2>
        <LeaveContactsScreenMainBlock />
      </div>
    </section>
  );
};

export default LeaveContactsScreen;
