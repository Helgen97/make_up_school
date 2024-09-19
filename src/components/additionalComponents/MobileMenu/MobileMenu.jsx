import { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import MobileMenuButton from "../MobileMenuButton";
import MobileMenuModal from "../MobileMenuModal";

const MobileMenu = () => {
  const [isMobileMenuActive, setMobileMenuActiveStatus] = useState(false);

  const openMobileMenuModal = () => {
    setMobileMenuActiveStatus(true);
  };

  const closeMobileMenuModal = () => {
    setMobileMenuActiveStatus(false);
  };

  return (
    <ClickAwayListener onClickAway={closeMobileMenuModal}>
      <div className="mobile-menu">
        <MobileMenuButton openModalFunction={openMobileMenuModal} />
        <MobileMenuModal
          isModalActive={isMobileMenuActive}
          closeModalFunction={closeMobileMenuModal}
        />
      </div>
    </ClickAwayListener>
  );
};

export default MobileMenu;
