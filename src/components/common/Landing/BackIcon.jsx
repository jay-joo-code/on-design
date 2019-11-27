import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LeftArrow } from 'icons/left-arrow.svg';
import s from 'styled-components';

const IconWrapper = s.div`
  position: fixed;
  top: 5rem;
  left: 5rem;
`;

const IconContainer = s.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
`;

const BackIcon = ({ prevUrl }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(prevUrl);
  };

  if (!prevUrl) return <div />;

  return (
    <IconWrapper>
      <IconContainer onClick={handleClick}>
        <LeftArrow width="2rem" height="2rem" opacity=".7" />
      </IconContainer>
    </IconWrapper>
  );
};

export default BackIcon;
