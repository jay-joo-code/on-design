import React from 'react';
import s from 'styled-components';

const Container = s.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 0 0 0 5rem;
`;

const Content = s.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const PageNumber = s.h3`
    font-size: 4rem;
    opacity: .6;
`;

const PageTitle = s.h2`
    font-size: 4rem;
`;

const PageSubtitle = s.h3`
    font-size: 4rem;
    color: ${(props) => props.theme.colors.red};
`;

const Landing = () => (
  <Container>
    <Content>
      <PageNumber>01</PageNumber>
      <PageTitle>Spark</PageTitle>
      <PageSubtitle>On Mesmerisation</PageSubtitle>
    </Content>
  </Container>
);

export default Landing;
