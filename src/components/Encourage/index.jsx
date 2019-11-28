import React from 'react';
import s from 'styled-components';
import theme from 'theme';

import Landing from 'components/common/Landing';
import Next from 'components/common/Next';
import Puppet from './Puppet';
import Behavior from './Behavior';

const Container = s.div`

`;

const Encourage = () => (
  <Container>
    <Landing
      pageNumber="02"
      pageTitle="Encourage"
      pageSubtitle="On Behavior"
      colorHex={theme.colors.green}
      prevUrl="/"
    />
    <Puppet />
    <Behavior />
    <Next topic="" />
  </Container>
);

export default Encourage;
