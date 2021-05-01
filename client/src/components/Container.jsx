import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 2rem;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}
`;

export default Container;
