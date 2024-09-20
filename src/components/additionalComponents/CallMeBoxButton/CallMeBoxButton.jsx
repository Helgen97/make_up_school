import PhoneCallSvg from "../../svgComponents/PhoneCallSvg";

const CallMeBoxButton = ({
  isModalActive,
  showModalFunction,
  hideModalFunction,
}) => {
  return (
    <button
      className="callMe_btn"
      onClick={isModalActive ? hideModalFunction : showModalFunction}
    >
      <PhoneCallSvg />
    </button>
  );
};

export default CallMeBoxButton;
