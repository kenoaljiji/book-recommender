import styled from 'styled-components';

export const StyledSpinner = styled.div`
  border: 5px solid ${({ theme }) => theme.colors.secondary};
  border-top: 5px solid #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s ease-in-out infinite;
  margin: 20px auto;
  grid-column: 1 / span 5;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
