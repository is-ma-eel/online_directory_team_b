import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";
import Logo from "./Logo";
import Introduction from "./Introduction";
import SearchBox from "./SearchBox";

const Heading = styled.header`
  margin: 0 auto;
  max-width: 75rem;
  width: 100%;
  display: block;
`;

const Header = () => {
  return (
    <>
      <Heading>
        <Container flex>
          <Logo />
          <Button>Register Business</Button>
        </Container>
        <Introduction />
        <SearchBox />
      </Heading>
    </>
  );
};

export default Header;
