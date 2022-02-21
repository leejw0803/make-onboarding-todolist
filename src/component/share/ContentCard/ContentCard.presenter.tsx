import ContentCardStyle from "./ContentCard.style";
import { ContentCardPresenterProps } from "./ContentCard.type";

function ContentCardPresenter({
  name,
  optionList,
  handleOptionClick,
  children,
}: ContentCardPresenterProps) {
  return (
    <ContentCardStyle.Wrapper>
      <ContentCardStyle.Header>
        <ContentCardStyle.ProfileBox>
          <ContentCardStyle.ProfileImg />
          <ContentCardStyle.ProfileName>{name}</ContentCardStyle.ProfileName>
        </ContentCardStyle.ProfileBox>
        <ContentCardStyle.Kebab
          optionList={optionList}
          handleOptionClick={handleOptionClick}
        />
      </ContentCardStyle.Header>
      <ContentCardStyle.Content>{children}</ContentCardStyle.Content>
    </ContentCardStyle.Wrapper>
  );
}
export default ContentCardPresenter;
