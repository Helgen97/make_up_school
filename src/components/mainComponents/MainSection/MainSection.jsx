import MainSectionTitle from "../../additionalComponents/MainSectionTitle";
import MainSectionLogoBox from "../../additionalComponents/MainSectionLogoBox";
import MainSectionDescription from "../../additionalComponents/MainSectionDescription";
import ScrollLink from "../../additionalComponents/ScrollLink";
import { useIntl } from "react-intl";

const MainSection = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="main">
      <div className="main_screen grid-area">
        <MainSectionTitle />
        <MainSectionLogoBox />
        <MainSectionDescription />
        <ScrollLink toId={"callback"} className="default-btn">
          {formatMessage({ id: "sign_up" })}
        </ScrollLink>
      </div>
    </section>
  );
};

export default MainSection;
