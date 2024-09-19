import { useIntl } from "react-intl";

const LeaveContactsScreenMainText = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="callback-screen_text">
      <p>{formatMessage({ id: "leave_contacts_screen_text" })}</p>
    </div>
  );
};

export default LeaveContactsScreenMainText;
