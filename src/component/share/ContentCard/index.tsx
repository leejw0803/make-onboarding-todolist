import ContentCardPresenter from "./ContentCard.presenter";
import { ContentCardProps } from "./ContentCard.type";

function ContentCard({
  name,
  optionList,
  handleOptionClick,
  children,
}: ContentCardProps) {
  return (
    <ContentCardPresenter
      name={name}
      optionList={optionList}
      handleOptionClick={handleOptionClick}
      children={children}
    />
  );
}

export default ContentCard;
