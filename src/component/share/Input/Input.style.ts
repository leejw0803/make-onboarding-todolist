import styled from "styled-components";

const InputStyle = {
  Input: styled.textarea.attrs({ type: "text" })`
    background: #ffffff;
    border: 1px solid #dee2e6;
    box-sizing: border-box;
    box-shadow: inset 0px 2px 0px rgba(225, 228, 232, 0.2);
    border-radius: 8px;
    align-items: flex-start;
    padding: 8px 12px;
    display: flex;
    flex-direction: row;
    height: 102px;
    width: 100%;
  `,
};

export default InputStyle;
