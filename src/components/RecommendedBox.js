import React, { useContext, useState } from 'react';
import ReactDom from 'react-dom';
import globalContext from '../context/globalContext';
import { Grid } from './styles/RecommendedBox.styled';
import { Button, ButtonContainer } from './styles/Button.styled';

import Card from './Card';
import Modal from './Modal';

const RecommendedBox = () => {
  const { loading, books } = useContext(globalContext);

  const [modal, setModal] = useState(false);
  const [recommended, setRecommended] = useState(false);

  const getRecommended = () => {
    setRecommended(true);
    setModal(true);
  };

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
        {loading ? (
          <p>...Loading</p>
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
