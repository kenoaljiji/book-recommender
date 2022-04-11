import React, { useReducer } from 'react';
import GlobalContext from './globalContext';
import BookReducer from './bookReducer';
import axios from 'axios';

const BookState = (props) => {
  const initialState = {
    books: [],
    book: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const getBooks = async (term) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=search` + term;

    try {
      setLoading();
      const res = await axios.get(url);

      dispatch({
        type: 'GET_BOOKS',
        payload: res.data.items,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getBookDetails = async (id) => {
    const url = `https://www.googleapis.com/books/v1/volumes/${id}`;

    try {
      const res = await axios.get(url);
      console.log(res);
      dispatch({
        type: 'GET_BOOK',
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        books: state.books,
        book: state.book,
        loading: state.loading,
        getBooks,
        getBookDetails,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default BookState;
