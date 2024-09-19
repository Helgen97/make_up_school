import ArrowUpSvg from "../../svgComponents/ArrowUpSvg";
import ScrollLink from "../ScrollLink";

const UpBoxButton = () => {
  return (
    <ScrollLink toId="root" className="up_btn">
      <ArrowUpSvg />
    </ScrollLink>
  );
};

export default UpBoxButton;
