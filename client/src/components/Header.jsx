import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";
import Logo from "./Logo";

const Heading = styled.header`
  margin: 0 auto;
  max-width: 75rem;
  width: 100%;
  display: block;
`;

const Header = () => {
  return (
    <Heading>
      <Container>
        <Logo />
        <Button>Register Business</Button>
      </Container>
    </Heading>
  );
};

export default Header;
