import TextField from "@mui/material/TextField";

const TextFieldImpl = ({
  name,
  value,
  label,
  onChange,
  dataIndex,
  isRequired,
  minRows,
  maxRows,
  helperText,
}) => {
  return (
    <TextField
      name={name}
      fullWidth
      required={isRequired ? true : false}
      value={value}
      multiline
      minRows={minRows || 1}
      maxRows={maxRows || 4}
      slotProps={{
        htmlInput: {
          "data-index": dataIndex,
        },
      }}
      helperText={helperText}
      size="small"
      data-index={dataIndex}
      margin="normal"
      label={label}
      variant="outlined"
      onChange={onChange}
    />
  );
};

export default TextFieldImpl;
