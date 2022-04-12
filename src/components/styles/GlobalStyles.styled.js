import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


  
  *,
    ::after,
    *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    max-width: 100%;
}

    html {
        height: 100%;
        font-size: 62.5%
    }

  body {
    box-sizing: border-box;
    font-weight: 300;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.2;
    font-size: 1rem;
    min-height: 95%;
    margin: 0;
    padding: 0;
  }

  p {
  
  }


  h1,h2,h3,h4,h5 {
      font-size:initial;
      font-weight:300;
      margin: 0;
     padding: 0;
  }

    h2 {
    font-size: 2.5rem;
    }

    p {
    font-size: 1.6rem;
    }
    a {
    text-decoration: none;
    }
    a:visited {
    color: #fff;
    }
    ul li {
    list-style: none;
    }

  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
