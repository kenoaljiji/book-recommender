import styled from 'styled-components';

export const Grid = styled.div`
  padding: 2rem 1rem;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  text-align: center;

  grid-gap: 2rem;
  grid-row-gap: 4rem;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  align-items: center;
  transition: all 0.4s;
  padding: 1rem 0.5rem;
  border: 1px solid #16625f94;
  width: 230px;

  &:hover {
    background-color: #eee;
  }

  & > div {
    height: 100%;
  }

  h5 {
    font-size: 1rem;

    margin: 0;
    margin-top: 1rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: auto;
    }
  }
  button {
    margin-top: auto;
  }
`;
