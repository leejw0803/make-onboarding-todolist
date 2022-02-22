import styled from "styled-components";

const ProfileCardStyle = {
  Wrapper: styled.div`
    width: 280px;
    height: 64px;
    background: #ffffff;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.03);
    border-radius: 66px;
    display: flex;
    padding: 6px 16px;
  `,

  ProfileImage: styled.img.attrs({
    alt: "profile image",
    src: "images/img-profile.JPG",
  })`
    background: red;
    width: 52px;
    height: 52px;
    border-radius: 26px;
    object-fit: cover;
    margin-right: 30px;
  `,

  ProfileContentBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `,

  Name: styled.p`
    color: #3a3d40;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  `,

  Email: styled.p`
    color: #b4b8bc;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
  `,
};

export default ProfileCardStyle;
