import React from 'react';
import s from 'styled-components';

const Container = s.div`
  display: flex;
  width: 100%;
`

const StickyContainer = s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50vw;
`

const StickyTopic = s.h2`
  font-size: 4rem;
  color: ${props => props.theme.colors.green};
  //opacity: .8;
`

const ButtonContainer = s.div`
  display: flex;
  width: 50vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = s.div`
  display: flex;
  flex-direction: column;
`

const Button = s.button`
  margin: 2rem 0;
`

const Button2 = s(Button)`
  background-color: white;
  padding: .2rem .5rem;
`

const Button3 = s(Button2)`
  border-radius: 10px;
`

const Button4 = s(Button3)`
  background-color: ${props => props.theme.colors.green};
  color: white;
`

const Button5 = s(Button4)`
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`

const Button6 = s(Button5)`
  padding: .5rem 1rem;
`

const Purchase = () => (
  <Container>
    <StickyContainer>
      <StickyTopic>Purchase</StickyTopic>
    </StickyContainer>
    <ButtonContainer>
      <ButtonWrapper>
        <Button>Purchase</Button>
        <Button2>Purchase</Button2>
        <Button3>Purchase</Button3>
        <Button4>Purchase</Button4>
        <Button5>Purchase</Button5>
        <Button6>Purchase</Button6>
      </ButtonWrapper>
    </ButtonContainer>
  </Container>
  )
  
export default Purchase;