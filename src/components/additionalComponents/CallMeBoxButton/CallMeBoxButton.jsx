import PhoneCallSvg from "../../svgComponents/PhoneCallSvg";

const CallMeBoxButton = ({ showModalFunction }) => {
  return (
    <button className="callMe_btn" onClick={showModalFunction}>
      <PhoneCallSvg />
    </button>
  );
};

export default CallMeBoxButton;
