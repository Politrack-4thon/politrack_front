import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme.js';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';

const BackGroundColor = styled.div`
  width: 100vw;
  background-color: black;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  max-width: 420px;
  background-color: white;
`;

const Layout = () => {
  const location = useLocation();

  const currentPath = location.pathname;

  // /login 및 /SignUp 경로일 때 푸터 숨김
  const hideFooter = currentPath === '/signin' || currentPath === '/SignUp';

  return (
    <BackGroundColor>
      <Wrapper>
        <Header />
        <Outlet />
        {!hideFooter && <Footer />}
      </Wrapper>
    </BackGroundColor>
  );
};
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}
export default App;
