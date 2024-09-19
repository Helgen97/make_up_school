import MobileMenuSvg from "../../svgComponents/MobileMenuSvg/";

const MobileMenuButton = ({ openModalFunction }) => {
  return (
    <button title="Mobile Menu Open Button" onClick={openModalFunction}>
      <MobileMenuSvg />
    </button>
  );
};

export default MobileMenuButton;
