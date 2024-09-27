import { CircularProgress } from "@mui/material";

const CenteredLoader = () => {
  return (
    <div className="d-flex h-100 justify-content-center align-items-center">
      <CircularProgress size={60} thickness={6} />
    </div>
  );
};

export default CenteredLoader;
