import { MenuPresenterProps } from "./Menu.type";
import MenuStyle from "./Menu.style";

function MenuPresenter({
  optionList,
  drop,
  handleOptionClick,
  handleSelectClick,
}: MenuPresenterProps) {
  return (
    <MenuStyle.Wrapper>
      <MenuStyle.IconBox onClick={(e) => handleSelectClick(e)} />
      {drop && optionList && (
        <MenuStyle.OptionList>
          {optionList.map((data: string, idx: number) => (
            <MenuStyle.Option
              key={data + idx}
              onClick={(e) => {
                e.stopPropagation();
                handleOptionClick(data);
              }}
              value={data}
            >
              {data}
            </MenuStyle.Option>
          ))}
        </MenuStyle.OptionList>
      )}
    </MenuStyle.Wrapper>
  );
}

export default MenuPresenter;
