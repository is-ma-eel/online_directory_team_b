import styled, { css } from "styled-components";

const Button = styled.button`
  border: 10px solid black;
  border-radius: 10px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.3px;

  ${(props) =>
    props.secondary
      ? css`
          background: white;
          color: black;
        `
      : css`
          background: #111;
          color: white;
        `}
`;

export default Button;
