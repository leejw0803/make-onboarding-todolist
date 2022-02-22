import styled from "styled-components";
import { DimmerProps } from "./Modal.type";

const ModalStyle = {
  Dimmer: styled.div<DimmerProps>`
    display: ${({ opened }) => (opened ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.45);
    z-index: 300;
  `,

  Wrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 544px;
    height: fit-content;
    background: white;
    border-radius: 8px;
  `,

  ModalHeader: styled.div`
    height: 52px;
    width: 100%;
    border-bottom: 1px solid #dee2e6;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px 10px;
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
    font-size: 20px;
    line-height: 30px;
    color: #232527;
  `,

  CloseIcon: styled.img.attrs({
    alt: "close icon",
    src: "images/icn-close.png",
  })`
    height: 28px;
    width: 28px;
    z-index: 20;
    cursor: pointer;
  `,

  ContentWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
  `,

  ModalContent: styled.div`
    padding: 0 0 48px;
  `,

  ModalFooter: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,

  OKButton: styled.button`
    background-color: #ffe040;
    border-radius: 8px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #232527;
    border: none;
    width: 106px;
    height: 40px;
    cursor: pointer;
    margin-left: 16px;
  `,

  CancelButton: styled.button`
    background-color: #ffffff;
    border: 1px solid #232527;
    border-radius: 8px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #232527;
    width: 106px;
    height: 40px;
    cursor: pointer;
  `,
};

export default ModalStyle;
