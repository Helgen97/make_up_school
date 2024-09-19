import { Link as Scroll } from "react-scroll";

const ScrollLink = ({ toId, className, children, onClickEvent }) => {
  return (
    <Scroll to={toId} className={className} smooth nofollow="true" onClick={onClickEvent}>
      {children}
    </Scroll>
  );
};

export default ScrollLink;
