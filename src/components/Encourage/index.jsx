import React from 'react';
import s from 'styled-components';
import theme from 'theme';

import Landing from 'components/common/Landing';

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
  </Container>
);

export default Encourage;
