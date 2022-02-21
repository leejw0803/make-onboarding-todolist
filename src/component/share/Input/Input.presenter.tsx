import InputStyle from "./Input.style";
import { InputPresenterProps } from "./Input.type";

function InputPresenter({
  value,
  placeholder,
  handleChange,
}: InputPresenterProps) {
  return (
    <InputStyle.Input
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
export default InputPresenter;
