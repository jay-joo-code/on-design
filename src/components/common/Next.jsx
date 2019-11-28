import React from 'react';
import s from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = s.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 5rem;
  
  background-color: ${(props) => props.theme.colors.green};
  
  cursor: pointer;
`;

const TextContainer = s.div`
  font-size: 4rem;
  color: white;
`;

const NextText = s.h3`
  opacity: .5;
`;

const Topic = s.h3`
  
`;

const Next = (props) => {
  const { topic, nextUrl } = props;
  const history = useHistory();
  const handleClick = () => {
    history.push(nextUrl);
  };

  return (
    <Container onClick={handleClick}>
      <TextContainer>
        <NextText>Next</NextText>
        <Topic>{topic}</Topic>
      </TextContainer>
    </Container>
  );
};

export default Next;
