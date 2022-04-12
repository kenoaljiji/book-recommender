import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px;
  text-align: center;
  width: ${({ variant }) => (variant ? '50%' : '80%')};
  background: #16625f;
  color: #fff;
  border: 2px solid rgba(0, 0, 0, 0);

  color: #fff;
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    background: transparent;
    border: 2px solid #16625f;
    color: #000;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 1rem;
`;
