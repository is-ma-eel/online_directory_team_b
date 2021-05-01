import styled from "styled-components";
import Container from "./Container";

const MainText = styled.h2`
  color: #111;
  font-size: 44px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0.2px;
  text-align: center;
  max-width: 730px;
  margin: 0 auto;
`;

const SubText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.3px;
  text-align: center;
  max-width: 730px;
  padding: 0 2rem;
  margin: 0 auto;
`;

const Introduction = () => (
  <Container>
    <MainText>
      The fastest way to find products, services & businesses in Hohoe
    </MainText>
    <SubText>
      Experience the greatest online business and customer satisfaction you want
      in Hohoe near you the smartest way ranging from the closest shops to the
      furthest companies.
    </SubText>
  </Container>
);

export default Introduction;
