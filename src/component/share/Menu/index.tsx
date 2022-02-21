import { useState } from "react";
import MenuPresenter from "./Menu.presenter";
import { MenuProps } from "./Menu.type";

function Menu({ optionList, handleOptionClick }: MenuProps) {
  const [drop, setDrop] = useState<boolean>(false);

  const handleSelectClick = () => {
    setDrop(!drop);
  };

  return (
    <MenuPresenter
      optionList={optionList}
      drop={drop}
      handleOptionClick={handleOptionClick}
      handleSelectClick={handleSelectClick}
    />
  );
}
export default Menu;
