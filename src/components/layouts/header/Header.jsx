import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // useNavigate 추가

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const sideBarRef = useRef();
  const sideBarBackgroundRef = useRef();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function toggleSideBar() {
    setIsSideBarOpen((prevState) => !prevState);
  }

  function openSideBar() {
    setIsSideBarOpen(true);
  }

  function closeSideBar() {
    setIsSideBarOpen(false);
  }

  function handleIconClick(path) {
    closeSideBar();
    navigate(path);
  }

  useEffect(() => {
    if (isSideBarOpen) {
      if (sideBarRef.current) {
        sideBarRef.current.style.display = 'flex';
      }
      if (sideBarBackgroundRef.current) {
        sideBarBackgroundRef.current.style.display = 'flex';
      }
    } else {
      if (sideBarRef.current) {
        sideBarRef.current.style.display = 'none';
      }
      if (sideBarBackgroundRef.current) {
        sideBarBackgroundRef.current.style.display = 'none';
      }
    }
  }, [isSideBarOpen]);

  return (
    <S.HeaderWrapper>
      <S.LogoContainer>
        <Link to={``}>
          <S.Logo>
            <S.LogoImg src='/Header/Logo.png' />
          </S.Logo>
        </Link>
        <S.NavbarLine>
          <S.NavbarLineImg
            src='/Header/NavBarLine.png'
            onClick={toggleSideBar} // NavbarLineImg를 클릭할 때 Sidebar 열리거나 닫힘
          />
        </S.NavbarLine>
      </S.LogoContainer>

      <S.SidebarWrapper ref={sideBarRef}>
        <S.UserInfo>
          <S.UserProfile src='/Header/UserProfile.png' />
          <S.UserName>사용자 이름</S.UserName>
        </S.UserInfo>
        <div onClick={() => handleIconClick('/PMain')}>
          <S.PoliContainer>
            <S.SideBarIcon src='/Header/HeadProIcon.png' />
            <S.SideBarText>정치인 프로필</S.SideBarText>
          </S.PoliContainer>
        </div>
        <div onClick={() => handleIconClick('/Community')}>
          <S.PoliContainer>
            <S.SideBarIcon src='/Header/HeadProIcon.png' />
            <S.SideBarText>오늘의 쟁점</S.SideBarText>
          </S.PoliContainer>
        </div>
        <div onClick={() => handleIconClick('/quiz')}>
          <S.PoliContainer>
            <S.SideBarIcon src='/Header/HeadComIcon.png' />
            <S.SideBarText>퀴즈</S.SideBarText>
          </S.PoliContainer>
        </div>
        <S.HeadLine>
          <hr
            style={{
              border: 'none',
              height: '1px',
              backgroundColor: '#7F85A3',
              margin: '10px 0',
              width: '80%',
            }}
          />
        </S.HeadLine>
        <div
          onClick={() => {
            closeSideBar();
            // 로그아웃 로직을 추가하세요
          }}
        >
          <S.LogoutContainer>
            <S.LogoutIcon src='/Header/HeadLogoutIcon.png' />
            <S.LogoutText>로그아웃</S.LogoutText>
          </S.LogoutContainer>
        </div>
      </S.SidebarWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
