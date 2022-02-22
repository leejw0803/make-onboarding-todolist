import styled from "styled-components";
import CategoryCard from "../../share/CategoryCard";
import ContentCard from "../../share/ContentCard";
import Modal from "../../share/Modal";
import Input from "../../share/Input";

const HomeStyle = {
  Wrapper: styled.div`
    padding: 56px 50px;
    display: flex;
    justify-content: flex-start;
  `,

  Category: styled(CategoryCard).attrs({ title: "To do" })``,

  Content: styled(ContentCard).attrs({ name: "dudo" })``,

  UpdateModal: styled(Modal).attrs({ title: "dudo", okText: "수정하기" })``,

  InputTitle: styled.h2`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #6e7175;
    margin-bottom: 8px;
  `,

  UpdateInput: styled(Input).attrs({
    placeholder: "수정할 텍스트를 입력해 주세요 :)",
  })``,

  RemoveModal: styled(Modal).attrs({
    noHeader: true,
    okText: "삭제",
    cancelText: "취소",
  })``,

  RemoveModalTitle: styled.h1`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    color: #232527;
  `,

  RemoveModalContent: styled.p`
    margin-top: 4px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.6px;
    color: #6e7175;
  `,

  AddModal: styled(Modal).attrs({ title: "dudo", okText: "추가하기" })``,

  AddInput: styled(Input).attrs({
    placeholder: "추가할 할 일을 입력해 주세요 :)",
  })``,
};

export default HomeStyle;
