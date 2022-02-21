type MenuPresenterProps = {
  optionList: string[];
  drop: boolean;
  handleOptionClick: (data: string) => void;
  handleSelectClick: (e: React.MouseEvent<HTMLImageElement>) => void;
};

type MenuProps = {
  optionList: string[];
  handleOptionClick: (data: string) => void;
};

export type { MenuPresenterProps, MenuProps };
