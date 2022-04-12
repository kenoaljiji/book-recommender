const bookReducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST_GET_BOOKS':
      return {
        ...state,
        books: [],
        loading: true,
      };
    case 'GET_BOOKS':
      const filteredBooks = action.payload?.slice(0, 10);
      return {
        ...state,
        books: filteredBooks ? [...filteredBooks] : filteredBooks,
        loading: false,
      };

    case 'REQUEST_GET_BOOK':
      return {
        ...state,
        book: {},
        loading: true,
      };
    case 'GET_BOOK':
      return {
        ...state,
        book: { ...action.payload },
        loading: false,
      };

    default:
      return state;
  }
};

export default bookReducer;
