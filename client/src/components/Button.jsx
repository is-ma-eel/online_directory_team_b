import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 10px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;
  border: 1px solid black;
  padding: 0.7rem 1.9rem;

  ${(props) =>
    props.secondary
      ? css`
          background: white;
          color: black;
          border: 1px solid black;
        `
      : css`
          background: #111;
          color: white;
        `}
`;

export default Button;
