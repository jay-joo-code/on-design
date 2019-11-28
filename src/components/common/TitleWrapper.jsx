import React from 'react';
import s from 'styled-components';

const Container = s.div`
  height: 100vh;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = s.h2`
  font-size: 10rem;
  
  @media (min-width: 768px) {
    font-size: 16rem;
  }
`

const DescContainer = s.div`
  margin: 2rem 0 0 0;
  opacity: .8;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleWrapper = (props) => {
  const { title, titleColor, children } = props;
  const ColoredTitle = s(Title)`
    color: ${titleColor};
  `
  return (
    <Container>
      <ColoredTitle>{title}</ColoredTitle>
      <DescContainer>
        {children}
      </DescContainer>
    </Container>
  )
}
export default TitleWrapper;