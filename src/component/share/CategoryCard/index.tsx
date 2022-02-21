import CategoryCardPresenter from "./CategoryCard.presenter";
import { CategoryCardProps } from "./CategoryCard.type";

function CategoryCard({
  title,
  count,
  children,
  handleClick,
}: CategoryCardProps) {
  return (
    <CategoryCardPresenter
      title={title}
      count={count}
      children={children}
      handleClick={handleClick}
    />
  );
}

export default CategoryCard;
