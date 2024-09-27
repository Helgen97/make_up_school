import { IconButton } from "@mui/material";
import AddIcon from "../Icons/AddIcon";

const IconAddButton = ({ name, onClick }) => {
  return (
    <IconButton
      color="primary"
      className="h-fit"
      size="small"
      data-name={name}
      onClick={onClick}
    >
      <AddIcon/>
    </IconButton>
  );
};

export default IconAddButton;
