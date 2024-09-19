import MobileMenuModalNavList from "../MobileMenuModalNavList";
import { MENUITEMS } from "../../../constants/content";

const MobileMenuModalNav = () => {
  return (
    <div className="mobile_nav">
      <MobileMenuModalNavList navListItems={MENUITEMS.leftMenu} />
      <MobileMenuModalNavList navListItems={MENUITEMS.rightMenu} />
    </div>
  );
};

export default MobileMenuModalNav;
