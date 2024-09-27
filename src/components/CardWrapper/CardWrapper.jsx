import { Card } from "@mui/material";

const CardWrapper = ({ children }) => {
  return (
    <Card
      variant="outlined"
      sx={{ height: "150px" }}
      className="d-flex flex-column align-items-center justify-content-center text-center"
    >
      {children}
    </Card>
  );
};

export default CardWrapper;
