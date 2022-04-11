import React, { useContext } from 'react';
import globalContext from '../context/globalContext';
import { StyledModal } from '../components/styles/Modal.styled';
import { Image } from './styles/Image.styled';
import { Button } from './styles/Button.styled';

const Modal = ({ setModal, recommended, setRecommended }) => {
  const GlobalContext = useContext(globalContext);

  const { book, books } = GlobalContext;

  const onClickHandeler = () => {
    setRecommended(false);
    setModal(false);
  };
  console.log(book);

  return (
    <StyledModal>
      {recommended ? (
        <div>
          <h3>Recomended Book is</h3>
          <Image src={book?.volumeInfo?.imageLinks.thumbnail} />
          <h4>{book.volumeInfo?.title}</h4>
          <p>{book.volumeInfo?.authors.toString()}</p>
          <p>{book.volumeInfo?.pageCount}</p>
          <a href={book.accessInfo?.webReaderLink}>Read this book online</a>
          <Button onClick={() => onClickHandeler()}>Close</Button>
        </div>
      ) : (
        <div>
          <h3>Details</h3>
          <p>Publisher: {book.volumeInfo?.publisher} </p>
          <p>PageCount: {book.volumeInfo?.pageCount} </p>
          <p>Avarage Rating: {book.volumeInfo?.pageCount} </p>
          <p>Avarage Rating: {book.volumeInfo?.pageCount} </p>
          <Button variant='small' onClick={onClickHandeler}>
            Close
          </Button>
        </div>
      )}
    </StyledModal>
  );
};

export default Modal;
