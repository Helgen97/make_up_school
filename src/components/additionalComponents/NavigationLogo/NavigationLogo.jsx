import { Link } from "react-router-dom";
import NavigationLogoSvg from "../../svgComponents/NavigationLogoSvg";

const NavigationLogo = () => {
  return (
    <div className="nav-logo">
      <Link to="/">
        <NavigationLogoSvg />
      </Link>
    </div>
  );
};

export default NavigationLogo;
