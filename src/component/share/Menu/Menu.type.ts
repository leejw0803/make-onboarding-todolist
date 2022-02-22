import { MouseEventHandler } from "react";

type MenuPresenterProps = {
  optionList: string[];
  drop: boolean;
  handleOptionClick: (data: string) => void;
  handleSelectClick: MouseEventHandler<HTMLElement>;
};

type MenuProps = {
  optionList: string[];
  handleOptionClick: (data: string) => void;
};

export type { MenuPresenterProps, MenuProps };
