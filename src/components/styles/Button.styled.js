import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px;
  text-align: center;
  width: ${({ variant }) => (variant ? '50%' : '90%')};
  background: #16625f;
  color: #fff;
  border: 1px solid #eee;
  cursor: pointer;
  border-radius: 2px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 1rem;
`;
