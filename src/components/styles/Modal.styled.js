import styled from 'styled-components';

export const StyledModal = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;

  & div {
    text-align: center;
    width: 500px;
    background: #fff;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 5px;
    box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem 2rem 2rem;
    font-family: Arial;
  }

  & a {
    text-decoration: none;
    display: inline-block;
  }

  & button {
    margin-top: 1rem;
  }
`;
