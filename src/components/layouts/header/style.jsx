import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  max-width: 420px;
  padding: 10px;
  flex-shrink: 0;
  justify-content: center;
  border: 1px solid white;
  color: white;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;

export const LogoImg = styled.img`
  width: 35%;
`;

export const NavbarLine = styled.div`
  margin-right: 20px;
`;

export const NavbarLineImg = styled.img`
  width: 140%;
  display: flex;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  width: 220px;
  /* height: 300px; */
  border: 1px solid #ebedf8;
  top: 60px;
  right: 0px;
  position: absolute;
  flex-direction: column;
  border-radius: 4px;
  background-color: #f6f7fe;
  z-index: 10;
  display: none;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const UserProfile = styled.img`
  width: 20%;
  margin-right: 30px;
  margin-left: 20px;
`;

export const UserName = styled.div`
  z-index: 999;
  color: black;
  font-size: 16px;
  font-family: 'NotoSansMedium';
  font-weight: 500;
`;

export const PoliContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  margin-top: 30px;
  margin-left: 30px;
`;

export const SideBarIcon = styled.img`
  width: 25.63px;
  height: 20px;
  margin-right: 30px;
`;

export const SideBarText = styled.div`
  color: #484a64;
  font-size: 14px;
  font-weight: 500;
  font-family: 'NotoSansMedium';
`;

export const HeadLine = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 10px;
`;

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 20px;
`;

export const LogoutIcon = styled.img`
  width: 25.63px;
  height: 20px;
  margin-right: 30px;
`;

export const LogoutText = styled.div`
  color: #484a64;
  font-size: 14px;
  font-weight: 500;
  font-family: 'NotoSansMedium';
`;
