import { CardContent } from "@mui/material";
import CardWrapper from "../CardWrapper";
import CustomIconButton from "../../components/CustomIconButton";
import AddBigIcon from "../Icons/AddBigIcon";

const CardWithAddButton = ({ onClick }) => {
  return (
    <CardWrapper>
      <CardContent>
        <CustomIconButton
          color="primary"
          size="large"
          icon={<AddBigIcon />}
          onClick={onClick}
        />
      </CardContent>
    </CardWrapper>
  );
};

export default CardWithAddButton;
