import styled from "styled-components";

const CategoryCardStyle = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 24px 28px;
  `,

  TitleBox: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  `,

  Title: styled.h1`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #4a2fec;
  `,

  AddButton: styled.button`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: rgba(74, 47, 236, 0.2);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,

  PlusIcon: styled.img.attrs({
    alt: "plus icon",
    src: "images/icn-plus.png",
  })``,
};

export default CategoryCardStyle;
