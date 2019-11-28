import React from 'react';
import s from 'styled-components';
import theme from 'theme';

import Landing from 'components/common/Landing';
import Physics from './Physics';
import Next from 'components/common/Next';
import Attention from './Attention';

const Container = s.div`

`;

const Spark = () => (
  <Container>
    <Landing
      pageNumber="01"
      pageTitle="Spark"
      pageSubtitle="On Mesmerisation"
      colorHex={theme.colors.red}
    />
    <Attention />
    <Next topic="Encourage" nextUrl="/encourage" />
  </Container>
);

export default Spark;
