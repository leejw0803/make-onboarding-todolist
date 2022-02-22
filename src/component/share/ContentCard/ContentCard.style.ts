import styled from "styled-components";
import Menu from "../Menu";

const ContentCardStyle = {
  Wrapper: styled.section`
    width: 388px;
    height: 105px;
    background: #ffffff;
    border: 1px solid #edf0f3;
    box-shadow: 0px 4px 12px rgba(59, 69, 88, 0.08);
    border-radius: 12px;
    padding: 16px 24px 24px;
    margin-bottom: 16px;
  `,

  Header: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  ProfileBox: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  ProfileImg: styled.img.attrs({
    alt: "profile image",
    src: "images/img-profile.JPG",
  })`
    width: 28px;
    height: 28px;
    border-radius: 14px;
    background-color: red;
    margin-right: 12px;
    object-fit: cover;
  `,

  ProfileName: styled.h1`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #3a3d40;
  `,

  Kebab: styled(Menu)``,

  Content: styled.p`
    margin-top: 16px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.7px;
    color: #3a3d40;
  `,
};

export default ContentCardStyle;
