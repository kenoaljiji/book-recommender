import React from 'react';
import { StyledSpinner } from './styles/Spinner.styled';
import spinner from '../assets/images/spinner.gif';

const Spinner = () => {
  return (
    <StyledSpinner>
      <img src={spinner} />
    </StyledSpinner>
  );
};

export default Spinner;
