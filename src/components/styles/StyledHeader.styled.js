import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

export const StyledHeader = styled.header`
  text-align: center;
`;

export const Form = styled.form`
  input[type='search'] {
    -webkit-appearance: textfield;
    font-family: inherit;
    font-size: 100%;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }
  input[type='search'] {
    border: solid 1px #ccc;
    padding: 9px 10px 9px 32px;
    width: 80%;

    -webkit-border-radius: 10em;
    -moz-border-radius: 10em;
    border-radius: 10em;

    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
  }

  input[type='search'] {
    padding-left: 10px;

    cursor: pointer;
  }
  input[type='search']:hover {
    background-color: #fff;
  }
  input[type='search']:focus {
    width: 90%;
    padding-left: 32px;
    color: #000;
    background-color: #fff;
    cursor: auto;
  }
  input:-moz-placeholder {
    color: transparent;
  }
  input::-webkit-input-placeholder {
    color: transparent;
  }
`;

export const SearchIcon = styled(SearchAlt)`
  color: black;
  width: 40px;
  cursor: pointer;
  position: absolute;
`;
