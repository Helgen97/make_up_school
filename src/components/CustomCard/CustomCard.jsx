import CardWrapper from "../CardWrapper";
import { CardActions, CardContent, Divider } from "@mui/material";
import CustomIconButton from "../../components/CustomIconButton";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";

const CustomCard = ({ cardTitle, editHandle, deleteHandle }) => {
  return (
    <CardWrapper>
      <CardContent>
        <h5 className="fw-bold">{cardTitle}</h5>
      </CardContent>

      <CardActions className="d-flex justify-content-center">
        <CustomIconButton
          onClick={editHandle}
          color="success"
          icon={<EditIcon />}
          size="large"
        />

        <Divider orientation="vertical" flexItem />

        <CustomIconButton
          onClick={deleteHandle}
          color="error"
          icon={<DeleteIcon />}
          size="large"
        />
      </CardActions>
    </CardWrapper>
  );
};

export default CustomCard;
