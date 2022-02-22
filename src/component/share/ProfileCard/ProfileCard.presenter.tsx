import ProfileCardStyle from "./ProfileCard.style";

function ProfileCardPresenter() {
  return (
    <ProfileCardStyle.Wrapper>
      <ProfileCardStyle.ProfileImage />
      <ProfileCardStyle.ProfileContentBox>
        <ProfileCardStyle.Name>두도</ProfileCardStyle.Name>
        <ProfileCardStyle.Email>dlwjdd@naver.com</ProfileCardStyle.Email>
      </ProfileCardStyle.ProfileContentBox>
    </ProfileCardStyle.Wrapper>
  );
}
export default ProfileCardPresenter;
