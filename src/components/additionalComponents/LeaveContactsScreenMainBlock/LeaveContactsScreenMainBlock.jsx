import { useDispatch, useSelector } from "react-redux";
import { fetchSendContacts } from "../../../store/slicers/contactsSlicer";
import LeaveContactsScreenMainText from "../LeaveContactsScreenMainText";
import LeaveContactsScreenForm from "../LeaveContactsScreenForm/";
import CallMeErrorBlock from "../CallMeErrorBlock";
import CallMeSuccessBlock from "../CallMeSuccessBlock";
import Loader from "../Loader";

const LeaveContactsScreenMainBlock = () => {
  const { isLoading, isError, isSuccess } = useSelector(
    (state) => state.contacts
  );
  const dispatch = useDispatch();

  const sendContacts = (contacts) => {
    dispatch(fetchSendContacts(contacts));
  };

  return (
    <div className="callback_screen-main">
      <LeaveContactsScreenMainText />
      {isLoading && <Loader />}
      {isError && <CallMeErrorBlock />}
      {isSuccess && <CallMeSuccessBlock />}
      {!isLoading && !isSuccess && (
        <LeaveContactsScreenForm sendContactsFunction={sendContacts} />
      )}
    </div>
  );
};

export default LeaveContactsScreenMainBlock;
