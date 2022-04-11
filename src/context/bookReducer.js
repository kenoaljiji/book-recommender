const bookReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      const filteredBooks = action.payload?.slice(0, 10);
      return {
        ...state,
        books: [...filteredBooks],
        loading: false,
      };
    case 'GET_BOOK':
      return {
        ...state,
        book: { ...action.payload },
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_MODAL':
      return {
        ...state,
        modal: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default bookReducer;
