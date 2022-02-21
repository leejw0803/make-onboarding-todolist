import InputPresenter from "./Input.presenter";
import { InputPresenterProps } from "./Input.type";

function Input({ value, placeholder, handleChange }: InputPresenterProps) {
  return (
    <InputPresenter
      value={value}
      placeholder={placeholder}
      handleChange={handleChange}
    />
  );
}
export default Input;
