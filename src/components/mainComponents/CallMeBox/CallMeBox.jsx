import { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import CallMeBoxButton from "../../additionalComponents/CallMeBoxButton";
import CallMeBoxModal from "../../additionalComponents/CallMeBoxModal/";

const CallMeBox = () => {
  const [isCallMeBoxActive, setBoxActive] = useState(false);

  const showModal = () => {
    setBoxActive(true);
  };

  const hideModal = () => {
    setBoxActive(false);
  };

  return (
    <ClickAwayListener onClickAway={hideModal}>
      <div className="callMe-box">
        <CallMeBoxButton
          isModalActive={isCallMeBoxActive}
          showModalFunction={showModal}
          hideModalFunction={hideModal}
        />
        <CallMeBoxModal isCallMeBoxActive={isCallMeBoxActive} />
      </div>
    </ClickAwayListener>
  );
};

export default CallMeBox;
