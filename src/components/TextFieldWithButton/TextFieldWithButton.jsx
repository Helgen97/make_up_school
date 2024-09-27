import TextFieldImpl from "../TextFieldImpl";
import IconAddButton from "../IconAddButton";

const TextFieldWithButton = ({ name, value, label, dataIndex, onChange, onClick }) => {
  return (
    <div className="d-flex gap-1 align-items-center">
      <TextFieldImpl
        name={name}
        value={value}
        label={label}
        dataIndex={dataIndex}
        onChange={onChange}
      />
      <IconAddButton name={name} onClick={onClick} />
    </div>
  );
};

export default TextFieldWithButton;
