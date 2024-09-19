import FooterLogoSvg from "../../svgComponents/FooterLogoSvg"


const Footer = () => {
  return (
    <footer>
      <div>
        <p>{"©" + new Date().getFullYear()} Olena Bulakh Make Up School</p>
      </div>
      <div>
        <a href="/">
          <FooterLogoSvg />
        </a>
      </div>
      <div>
        <p>
          Powered by{" "}
          <a href="https://www.dmytro-donchenko.pp.ua" className="creator-link">
            Helgen
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
