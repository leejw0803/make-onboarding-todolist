import CategoryCardStyle from "./CategoryCard.style";
import { CategoryCardPresenterProps } from "./CategoryCard.type";

function CategoryCardPresenter({
  title,
  count,
  children,
  handleClick,
}: CategoryCardPresenterProps) {
  return (
    <CategoryCardStyle.Wrapper>
      <CategoryCardStyle.TitleBox>
        <CategoryCardStyle.Title>{`${title} (${count})`}</CategoryCardStyle.Title>
        <CategoryCardStyle.AddButton onClick={handleClick}>
          <CategoryCardStyle.PlusIcon />
        </CategoryCardStyle.AddButton>
      </CategoryCardStyle.TitleBox>
      {children}
    </CategoryCardStyle.Wrapper>
  );
}
export default CategoryCardPresenter;
