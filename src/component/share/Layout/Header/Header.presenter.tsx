import Logo from "../../Logo";
import ProfileCard from "../../ProfileCard";
import HeaderStyle from "./Header.style";

function HeaderPresenter() {
  return (
    <HeaderStyle.Wrapper>
      <Logo />
      <ProfileCard />
    </HeaderStyle.Wrapper>
  );
}
export default HeaderPresenter;
