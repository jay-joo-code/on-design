import React from 'react';
import s from 'styled-components';

const Container = s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
`

const Phrase = s.h2`
  font-size: 8rem;
  padding: 1.5rem 0;
`

const GreenPhrase = s(Phrase)`
  color: ${props => props.theme.colors.green};
`

const GreyPhrase = s(Phrase)`
  opacity: .6;
`

const Puppet = () => (
  <Container>
    <GreyPhrase>let</GreyPhrase>
    <GreenPhrase>user</GreenPhrase>
    <GreyPhrase>=</GreyPhrase>
    <GreyPhrase>new</GreyPhrase>
    <GreenPhrase>Puppet()</GreenPhrase>
    <GreyPhrase>;</GreyPhrase>
  </Container>
  )
  
export default Puppet