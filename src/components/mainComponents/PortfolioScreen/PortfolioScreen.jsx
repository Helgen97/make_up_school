import { useIntl } from "react-intl";
import PortfolioScreenAlbums from "../../additionalComponents/PortfolioScreenAlbums";

const PortfolioScreen = () => {
  const { formatMessage } = useIntl();

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-screen grid-area">
        <h3>{formatMessage({ id: "portfolio" })}</h3>
        <PortfolioScreenAlbums />
      </div>
    </section>
  );
};

export default PortfolioScreen;
