import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  width: 100%;
  max-width: 420px;
  padding: 10px;
  flex-shrink: 0;
  justify-content: center;
  border: 1px solid white;
  color: white;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 35%;
`;
