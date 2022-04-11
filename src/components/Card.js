import React, { useCallback, useContext, useEffect } from 'react';
import globalContext from '../context/globalContext';

import { Button } from './styles/Button.styled';
import { StyledCard } from './styles/RecommendedBox.styled';
import { Image } from './styles/Image.styled';

const Card = ({ book, setModal }) => {
  const image = book?.volumeInfo.imageLinks?.thumbnail;

  const GlobalContext = useContext(globalContext);

  const { getBookDetails } = GlobalContext;

  const onClickHandeler = (id) => {
    getBookDetails(id);
    setModal(true);
  };

  return (
    <>
      <StyledCard>
        <Image src={image + 'jpg'} />
        <h5>{book.volumeInfo.title}</h5>
        <p>{book?.volumeInfo.authors?.toString().split(', ')}</p>
        <Button onClick={() => onClickHandeler(book.id)}>Details</Button>
      </StyledCard>
    </>
  );
};

export default Card;
