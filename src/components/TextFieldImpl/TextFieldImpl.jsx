import TextField from "@mui/material/TextField";
import { memo } from "react";

const TextFieldImpl = memo(
  ({
    name,
    value,
    label,
    onChange,
    dataIndex,
    isRequired = false,
    minRows = 1,
    maxRows = 4,
    helperText,
    isMultiline = false,
  }) => {
    return (
      <TextField
        name={name}
        fullWidth
        required={isRequired}
        value={value}
        multiline={isMultiline}
        minRows={isMultiline ? minRows : undefined}
        maxRows={isMultiline ? maxRows : undefined}
        slotProps={{
          "data-index": dataIndex,
        }}
        helperText={helperText}
        size="small"
        margin="normal"
        label={label}
        variant="outlined"
        onChange={onChange}
      />
    );
  }
);

export default TextFieldImpl;
