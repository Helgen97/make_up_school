import { useIntl } from "react-intl";
import ScrollLink from "../ScrollLink";

const NavigationBarList = ({ navListItems = [] }) => {
  const { formatMessage } = useIntl();

  return (
    <ul className="nav-menu">
      {navListItems.map((navListItem) => {
        if (navListItem.linkId === "home") {
          return (
            <li key={navListItem.linkId}>
              <a href="/" nofollow="true">
                {formatMessage({ id: navListItem.linkIntlId })}
              </a>
            </li>
          );
        }

        return (
          <li key={navListItem.linkId}>
            <ScrollLink toId={navListItem.linkId}>
              {formatMessage({ id: navListItem.linkIntlId })}
            </ScrollLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationBarList;
