import Button from "@mui/material/Button";

const CenteredButton = ({ onClick, isError, buttonText }) => {
  return (
    <div className="d-flex justify-content-center mt-1">
      <Button
        variant="contained"
        color={isError ? "error" : "primary"}
        size="large"
        onClick={onClick}
      >
        {isError
          ? "Сталася помилка, оновіть дані та спробуйте ще раз"
          : buttonText || "Зберегти зміни"}
      </Button>
    </div>
  );
};

export default CenteredButton;
