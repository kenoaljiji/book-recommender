import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import RecommendedBox from './components/RecommendedBox';

function App() {
  const theme = {
    colors: {
      primary: '#181c24',
      secondary: '#0daf69',
      text: '#eee',
    },
    breakpoints: {
      desktop: '1280px',
      tablet: '1200px',
      mobile: '768px',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <RecommendedBox />
      </Container>
    </ThemeProvider>
  );
}

export default App;
