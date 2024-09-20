import { Link } from "react-router-dom";
import FooterLogoSvg from "../../svgComponents/FooterLogoSvg";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>{"©" + new Date().getFullYear()} Olena Bulakh Make Up School</p>
      </div>
      <div>
        <Link to="/">
          <FooterLogoSvg />
        </Link>
      </div>
      <div>
        <p>
          Powered by{" "}
          <a
            href="https://www.dmytro-donchenko.pp.ua"
            target="_blank"
            className="creator-link"
          >
            Helgen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
