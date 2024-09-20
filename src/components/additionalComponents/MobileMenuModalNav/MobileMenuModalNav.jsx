import NavigationList from "../NavigationList";
import { MENUITEMS } from "../../../constants/content";

const MobileMenuModalNav = ({ onClickEvent }) => {
  return (
    <div className="mobile_nav">
      <ul className="mobile_nav-menu">
        <NavigationList
          navListItems={MENUITEMS.leftMenu}
          onClickEvent={onClickEvent}
        />
        <NavigationList
          navListItems={MENUITEMS.rightMenu}
          onClickEvent={onClickEvent}
        />
      </ul>
    </div>
  );
};

export default MobileMenuModalNav;
