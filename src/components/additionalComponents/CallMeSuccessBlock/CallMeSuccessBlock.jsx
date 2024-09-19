import { useIntl } from "react-intl";
import SuccessSvg from "../../svgComponents/SuccessSvg";

const CallMeSuccessBlock = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <SuccessSvg />
      <p>{formatMessage({ id: "phone_gotcha" })}</p>
      <p>{formatMessage({ id: "call_waiting" })}</p>
    </div>
  );
};

export default CallMeSuccessBlock;
