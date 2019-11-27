import React from 'react';
import s from 'styled-components';
import BackIcon from './BackIcon';

const Container = s.div`
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const Landing = ({
  pageNumber, pageTitle, pageSubtitle, colorHex, prevUrl,
}) => {
  const PageSubtitle = s.h3`
    font-size: 4rem;
    color: ${colorHex};
  `;

  return (
    <Container>
      <BackIcon prevUrl={prevUrl} />
      <Content>
        <PageNumber>{pageNumber}</PageNumber>
        <PageTitle>{pageTitle}</PageTitle>
        <PageSubtitle>{pageSubtitle}</PageSubtitle>
      </Content>
    </Container>
  );
};

export default Landing;
