import React from 'react';
import Search from './Search';
import { StyledHeader } from './styles/StyledHeader.styled';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <h2>Book Recommender</h2>
        <p>Witch book shold you read</p>
        <Search />
      </StyledHeader>
    </>
  );
};

export default Header;
