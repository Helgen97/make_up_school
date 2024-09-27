import { IconButton } from "@mui/material";

const CustomIconButton = ({ icon, color, onClick, size }) => {
  return (
    <IconButton onClick={onClick} color={color} size={size || "small"}>
      {icon}
    </IconButton>
  );
};

export default CustomIconButton;
