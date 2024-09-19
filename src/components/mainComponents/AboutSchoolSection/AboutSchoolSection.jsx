import { useIntl } from "react-intl";
import AboutSchoolSectionDescriptions from "../../additionalComponents/AboutSchoolSectionDescriptions";
import AboutSchoolSectionImageBlock from "../../additionalComponents/AboutSchoolSectionImageBlock";

const AboutSchoolSection = () => {
  const { formatMessage } = useIntl();

  return (
    <section id="about_us" className="school">
      <div className="school_description-block">
        <h2 className="school_title">
          {formatMessage({ id: "about_school" })}
        </h2>
        <AboutSchoolSectionDescriptions />
      </div>
      <AboutSchoolSectionImageBlock />
    </section>
  );
};

export default AboutSchoolSection;
