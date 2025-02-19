import PhoneSvg from "../../svgComponents/PhoneSvg";
import ClockSvg from "../../svgComponents/ClockSvg";
import MarkerSvg from "../../svgComponents/MarkerSvg";
import InstagramSvg from "../../svgComponents/InstagramSvg";
import ContactItem from "../ContactItem";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { useCallback, useEffect } from "react";
import { fetchSchoolContacts } from "../../../store/slicers/schoolContacts";

const ContactItems = () => {
  const { locale } = useIntl();

  const dispatch = useDispatch();

  const {
    schoolContacts: {
      id,
      phone,
      workingHoursEn,
      workingHoursUA,
      addressEn,
      addressUa,
      instagram,
    },
    isLoading,
  } = useSelector((state) => state.schoolContacts);

  useEffect(() => {
    dispatch(fetchSchoolContacts());
  }, []);

  const getContactItems = useCallback(() => {
    return [
      {
        textPosition: "right-text",
        itemSvg: <PhoneSvg />,
        itemHref: `tel:${phone}`,
        itemText: phone,
      },
      {
        textPosition: "left-text",
        itemSvg: <ClockSvg />,
        itemHref: "",
        itemText: locale === "en" ? workingHoursEn : workingHoursUA,
      },
      {
        textPosition: "right-text",
        itemSvg: <MarkerSvg />,
        itemHref: `https://www.google.com/maps/dir//${addressEn}`,
        itemText: locale === "en" ? addressEn : addressUa,
      },
      {
        textPosition: "left-text",
        itemSvg: <InstagramSvg />,
        itemHref: `https://www.instagram.com/${instagram.replace("@", "")}/`,
        itemText: instagram,
      },
    ];
  }, [isLoading, locale]);

  return (
    <div className="contact-items">
      {isLoading && <Loader />}

      {!isLoading &&
        getContactItems().map((contactItem) => {
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
