import React, { useContext, useState } from 'react';
import { Form, SearchIcon } from './styles/StyledHeader.styled';
import globalContext from '../context/globalContext';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const { getBooks } = useContext(globalContext);

  const onSubmitHandeler = (e) => {
    e.preventDefault();
    if (searchValue !== '') {
      getBooks(searchValue);
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <input
        type='search'
        placeholder='Search Book'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchIcon onClick={onSubmitHandeler} />
    </Form>
  );
};

export default Search;
