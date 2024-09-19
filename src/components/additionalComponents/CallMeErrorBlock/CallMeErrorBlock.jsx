import { useIntl } from "react-intl";
import ErrorSvg from "../../svgComponents/ErrorSvg";

const CallMeErrorBlock = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <ErrorSvg />
      <p>{formatMessage({ id: "oops" })}</p>
      <p>{formatMessage({ id: "an_error" })}</p>
      <p>{formatMessage({ id: "try_again" })}</p>
    </div>
  );
};

export default CallMeErrorBlock;
