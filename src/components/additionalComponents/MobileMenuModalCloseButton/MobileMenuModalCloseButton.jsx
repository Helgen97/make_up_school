import CloseCrossSvg from "../../svgComponents/CloseCrossSvg"

const MobileMenuModalCloseButton = ({ closeModalFunction }) => {
  return (
    <div className="mobile_menu-modal_btn-box">
      <button
        className="mobile_menu-modal_close-btn"
        title="Mobile Menu Modal Close Button"
        onClick={closeModalFunction}
      >
        <CloseCrossSvg />
      </button>
    </div>
  );
};

export default MobileMenuModalCloseButton;
