import styled from "styled-components";
import CategoryCard from "../../share/CategoryCard";

const HomeStyle = {
  Wrapper: styled.div`
    padding: 56px 50px;
    display: flex;
    justify-content: flex-start;
  `,

  Category: styled(CategoryCard).attrs({ title: "To do" })``,
};

export default HomeStyle;
