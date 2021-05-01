import { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

const SearchContainer = styled(Container)`
  background: #c4c4c4;
  border-radius: 10px;
  padding: 1rem;
  display: grid;
`;

const SearchField = styled.div`
  display: grid;
`;

const InputField = styled.input`
  background: transparent;
  border: none;
  padding: 0.5rem;
`;

const SearchBox = () => {
  const [text, setText] = useState("");

  return (
    <SearchContainer>
      <SearchField>
        <SearchIcon />
        <InputField />
      </SearchField>
      <Button>Search</Button>
    </SearchContainer>
  );
};

export default SearchBox;
