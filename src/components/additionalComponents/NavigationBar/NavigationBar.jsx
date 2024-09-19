import NavigationBarList from "../NavigationBarList";

const NavigationBar = ({ navListItems }) => {
  return (
    <div className="nav-bar">
      <NavigationBarList navListItems={navListItems} />
    </div>
  );
};

export default NavigationBar;
