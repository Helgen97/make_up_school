import { useIntl } from "react-intl";
import ScrollLink from "../ScrollLink";

const MobileMenuModalNavList = ({ navListItems = [] }) => {
  const { formatMessage } = useIntl();
  return (
    <ul className="mobile_nav-menu">
      {navListItems.map((navListItem) => {
        if (navListItem.linkId === "home") {
          <li key={navListItem.linkId}>
            <a href="/" nofollow="true">
              {formatMessage({ id: navListItem.linkIntlId })}
            </a>
          </li>;
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

export default MobileMenuModalNavList;
