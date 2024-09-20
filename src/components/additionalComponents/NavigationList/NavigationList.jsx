import { useIntl } from "react-intl";
import ScrollLink from "../ScrollLink";
import { Link, useLocation } from "react-router-dom";

const NavigationList = ({ navListItems = [], onClickEvent }) => {
  const { pathname } = useLocation();

  const { formatMessage } = useIntl();

  return (
    <>
      {navListItems.map((navListItem) => {
        if (pathname !== "/") {
          return (
            <li key={navListItem.linkId}>
              <Link
                to={
                  navListItem.linkId === "home"
                    ? "/"
                    : `/#${navListItem.linkId}`
                }
                onClick={onClickEvent}
              >
                {formatMessage({ id: navListItem.linkIntlId })}
              </Link>
            </li>
          );
        } else if (navListItem.linkId === "home") {
          return (
            <li key={navListItem.linkId}>
              <Link to="/" onClick={onClickEvent}>
                {formatMessage({ id: navListItem.linkIntlId })}
              </Link>
            </li>
          );
        } else {
          return (
            <li key={navListItem.linkId}>
              <ScrollLink toId={navListItem.linkId} onClickEvent={onClickEvent}>
                {formatMessage({ id: navListItem.linkIntlId })}
              </ScrollLink>
            </li>
          );
        }
      })}
    </>
  );
};

export default NavigationList;
