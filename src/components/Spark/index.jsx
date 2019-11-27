import React from 'react';
import s from 'styled-components';

import Landing from './Landing';
import Physics from './Physics';
import Next from './Next';

const Container = s.div`

`;

const Spark = () => (
  <Container>
    <Landing />
    <Physics />
    <Next />
  </Container>
);

export default Spark;
