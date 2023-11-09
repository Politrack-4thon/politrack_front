import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme.js';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  position: relative;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  max-width: 420px;
  background-color: white;
  position: relative;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 0;
`;

const Layout = () => {
  const location = useLocation();

  const currentPath = location.pathname;

  // 인트로, 로그인, 회원가입 시 푸터 숨김
  const hideFooter =
    currentPath === '/Signin' ||
    currentPath === '/SignUp' ||
    currentPath === '/';

  return (
    <BackGroundColor>
      <Wrapper>
        <Header />
        <Content>
          <Outlet />
        </Content>
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
