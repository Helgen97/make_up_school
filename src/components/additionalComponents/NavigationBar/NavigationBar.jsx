import NavigationList from "../NavigationList";

const NavigationBar = ({ navListItems }) => {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <NavigationList navListItems={navListItems} />
      </ul>
    </div>
  );
};

export default NavigationBar;
