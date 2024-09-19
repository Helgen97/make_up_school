import MobileMenuModalCloseButton from "../MobileMenuModalCloseButton"
import MobileMenuModalNav from "../MobileMenuModalNav";

const MobileMenuModal = ({ isModalActive, closeModalFunction }) => {
  return (
    <div className={isModalActive ? "mobile-menu_modal active" : "mobile-menu_modal" }>
      <MobileMenuModalCloseButton closeModalFunction={closeModalFunction} />
      <MobileMenuModalNav />
    </div>
  );
};

export default MobileMenuModal;
