import { ChangeEventHandler } from "react";

type InputPresenterProps = {
  value: string;
  placeholder: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
};

export type { InputPresenterProps };
