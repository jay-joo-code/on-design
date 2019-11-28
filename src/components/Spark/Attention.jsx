import React from 'react';
import theme from 'theme';
import TitleContainer from 'components/common/TitleWrapper';

const Attention = () => (
    <TitleContainer title="Attention" titleColor={theme.colors.red}>
        <p>What does not catch the eye, does not exist</p>
        <p>Perception is existence, ignorance is death</p>
    </TitleContainer>
  )
  
export default Attention;