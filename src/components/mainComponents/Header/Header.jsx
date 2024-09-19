import MobileMenu from "../../additionalComponents/MobileMenu";
import NavigationBar from "../../additionalComponents/NavigationBar";
import NavigationLogo from "../../additionalComponents/NavigationLogo";
import NavigationLangBox from "../../additionalComponents/NavigationLangBox";
import { MENUITEMS } from "../../../constants/content";

const Header = ({ appLang, changeAppLangFunction }) => {
  return (
    <header>
      <MobileMenu />
      <NavigationBar navListItems={MENUITEMS.leftMenu} />
      <NavigationLogo />
      <NavigationBar navListItems={MENUITEMS.rightMenu} />
      <NavigationLangBox
        appLang={appLang}
        changeAppLangFunction={changeAppLangFunction}
      />
    </header>
  );
};

export default Header;
