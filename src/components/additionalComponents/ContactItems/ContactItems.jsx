import PhoneSvg from "../../svgComponents/PhoneSvg";
import ClockSvg from "../../svgComponents/ClockSvg";
import MarkerSvg from "../../svgComponents/MarkerSvg";
import InstagramSvg from "../../svgComponents/InstagramSvg";
import ContactItem from "../ContactItem";
import { useIntl } from "react-intl";

const ContactItems = () => {
  const { formatMessage } = useIntl();

  const contactItems = [
    {
      textPosition: "right-text",
      itemSvg: <PhoneSvg />,
      itemHref: "tel:+380675661177",
      itemText: "+380 (67) 566-11-77",
    },
    {
      textPosition: "left-text",
      itemSvg: <ClockSvg />,
      itemHref: "",
      itemText: formatMessage({ id: "working_hours" }),
    },
    {
      textPosition: "right-text",
      itemSvg: <MarkerSvg />,
      itemHref:
        "https://www.google.com/maps/dir//Kyiv,%20Mykhaila%20Maksymovycha%20St,%2024B",
      itemText: formatMessage({ id: "address" }),
    },
    {
      textPosition: "left-text",
      itemSvg: <InstagramSvg />,
      itemHref: "https://www.instagram.com/elena_bulakh_makeup/",
      itemText: "@elena_bulakh_makeup",
    },
  ];

  return (
    <div className="contact-items">
      {contactItems.map((contactItem) => {
        return (
          <ContactItem
            key={contactItem.itemText}
            textPosition={contactItem.textPosition}
            itemSvg={contactItem.itemSvg}
            itemHref={contactItem.itemHref}
            itemText={contactItem.itemText}
          />
        );
      })}
    </div>
  );
};

export default ContactItems;
