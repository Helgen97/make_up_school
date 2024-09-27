import Grid from "../Grid";
import LinkWrapper from "../LinkWrapper";
import { SIDEBAR_LINKS } from "../../constants/content";
import { driver } from "driver.js";

const Sidebar = () => {
  return (
    <Grid
      id="sidebar"
      size={3}
      className={"d-flex flex-column gap-2 p-3 shadow-sm bg-light"}
    >
      {SIDEBAR_LINKS.map((link) => (
        <LinkWrapper
          key={link.linkText}
          href={link.href}
          linkText={link.linkText}
        >
          {<link.icon />}
        </LinkWrapper>
      ))}
    </Grid>
  );
};

export default Sidebar;
