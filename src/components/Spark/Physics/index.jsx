import React from 'react';
import s from 'styled-components';
import Catapult from './Catapult';

const Container = s.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TextContainer = s.div`
  font-size: 1.5rem;
  flex-grow: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = s.div`
  padding: .5rem 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grey = s.p`
  opacity: .7;
`;

const Red = s.p`
  color: ${(props) => props.theme.colors.red};
`;

const Physics = () => (
  <Container>
    <Catapult />
    <TextContainer>
      <Paragraph>
        <Grey>What does not catch the eye,</Grey>
        <Grey>May as well not exist.</Grey>
      </Paragraph>
      <Paragraph>
        <Red>Attention brings life,</Red>
        <Grey>Indifference is death.</Grey>
      </Paragraph>
    </TextContainer>
  </Container>
);

export default Physics;
