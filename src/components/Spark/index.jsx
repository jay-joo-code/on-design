import React from 'react';
import s from 'styled-components';
import theme from 'theme';

import Landing from 'components/common/Landing';
import Physics from './Physics';
import Next from './Next';

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
    <Physics />
    <Next />
  </Container>
);

export default Spark;
