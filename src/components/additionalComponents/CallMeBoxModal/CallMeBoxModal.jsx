import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { postSendContacts } from "../../../store/slicers/contactsSlicer";
import CallMeBoxModalForm from "../CallMeBoxModalForm";
import CallMeErrorBlock from "../CallMeErrorBlock";
import CallMeSuccessBlock from "../CallMeSuccessBlock";
import Loader from "../Loader";

const CallMeBoxModal = ({ isCallMeBoxActive }) => {
  const { formatMessage } = useIntl();
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.contacts
  );
  const dispatch = useDispatch();

  const sendContacts = (contacts) => {
    dispatch(postSendContacts(contacts));
  };

  return (
    <div className={isCallMeBoxActive ? "callMe-modal active" : "callMe-modal"}>
      <h3>{formatMessage({ id: "callMeBox_title" })}</h3>

      {isLoading && <Loader />}
      {isError && <CallMeErrorBlock />}
      {isSuccess && <CallMeSuccessBlock />}
      {!isLoading && !isSuccess && (
        <CallMeBoxModalForm sendContactsFunction={sendContacts} />
      )}

      <div>
        <p>{formatMessage({ id: "callMeBox_footer" })}</p>
        <a href="tel:+380 (67) 566-11-77">+380 (67) 566-11-77</a>
      </div>
    </div>
  );
};

export default CallMeBoxModal;
