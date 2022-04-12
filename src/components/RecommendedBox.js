import React, { useContext, useState, useCallback } from 'react';
import ReactDom from 'react-dom';
import globalContext from '../context/globalContext';
import { Grid } from './styles/RecommendedBox.styled';
import { Button, ButtonContainer } from './styles/Button.styled';

import Card from './Card';
import Modal from './Modal';
import Spinner from './Spinner';

const RecommendedBox = () => {
  const { loading, books, dispatch } = useContext(globalContext);

  const [modal, setModal] = useState(false);
  const [recommended, setRecommended] = useState(false);

  const getRecommended = () => {
    getRecomendedBook();
    setRecommended(true);
    setModal(true);
  };

  const getRecomendedBook = useCallback(() => {
    const newBooks = books.slice();
    const randomBook = newBooks[Math.floor(Math.random() * newBooks.length)];

    dispatch({
      type: 'GET_BOOK',
      payload: randomBook,
    });

    return randomBook;
  }, [books, dispatch]);

  return (
    <>
      <ButtonContainer>
        {books?.length > 0 ? (
          <Button onClick={getRecommended}>Recomended</Button>
        ) : (
          <p>Search the book and choose recommended </p>
        )}
        {!books && <p>Cannot find a book</p>}
      </ButtonContainer>

      <Grid>
        {loading && books.length === 0 ? (
          <Spinner />
        ) : (
          books?.map((item) => (
            <Card book={item} key={item.id} setModal={setModal} />
          ))
        )}
      </Grid>
      {ReactDom.createPortal(
        modal && (
          <Modal
            setModal={setModal}
            setRecommended={setRecommended}
            recommended={recommended}
          />
        ),
        document.getElementById('modal')
      )}
    </>
  );
};

export default RecommendedBox;
