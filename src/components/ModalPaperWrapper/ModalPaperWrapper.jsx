import { Paper } from "@mui/material";

const ModalPaperWrapper = ({ children }) => {
  return (
    <Paper className="w-50 h-75 p-5 position-absolute top-50 start-50 translate-middle overflow-auto">
      {children}
    </Paper>
  );
};

export default ModalPaperWrapper;
