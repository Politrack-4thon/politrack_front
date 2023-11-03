import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 100%;
  max-width: 420px;
  padding: 10px;
  flex-shrink: 0;
  justify-content: center;
`;

export const FooterLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Line = styled.div`
  height: 1px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.gray3};
  opacity: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterEng = styled.div`
  color: ${({ theme }) => theme.colors.gray4};
  font-weight: 500;
  font-size: 12px;
  margin-top: 20px;
  position: relative;
  margin-left: 20px;
`;

export const FooterKor = styled.div`
  color: ${({ theme }) => theme.colors.gray4};
  font-weight: 500;
  font-size: 12px;
  margin-top: 15px;
  position: relative;
  margin-left: 20px;
`;

export const FooterLogo = styled.div`
  margin-left: 20px;
  margin-top: 15px;
  align-items: center;
  display: flex;
`;

export const FooterInsta = styled.img`
  width: 30%;
  color: ${({ theme }) => theme.colors.gray4};
`;

export const FooterGithub = styled.img`
  width: 30%;
  position: relative;
  right: 30px;
  color: ${({ theme }) => theme.colors.gray4};
`;
