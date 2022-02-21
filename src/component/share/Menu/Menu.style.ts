import styled from "styled-components";

const MenuStyle = {
  Wrapper: styled.div`
    width: fit-content;
    outline: none;
    display: flex;
    flex-direction: column;
    text-align: start;
  `,

  IconBox: styled.img.attrs({
    alt: "kebab icon",
    src: "images/icn-kebab.png",
  })`
    width: 32px;
    height: 32px;
    cursor: pointer;
  `,

  OptionList: styled.ul`
    position: absolute;
    width: 40px;
    display: block;
    padding: 4px 0;
    border-radius: 4px;
    background-color: #232527;
    margin-top: 24px;
    box-shadow: 0 4px 12px rgba(59, 69, 88, 0.08);
  `,

  Option: styled.li`
    list-style: none;
    width: 40px;
    height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;

    &:hover {
      background-color: #6e7175;
      cursor: pointer;
    }
  `,
};

export default MenuStyle;
