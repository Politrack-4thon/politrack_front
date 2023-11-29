import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { API } from '../../../api/axois';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const user_id = localStorage.getItem('user_id');
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(!!user_id);

  useEffect(() => {
    if (user_id) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user_id]);

  useEffect(() => {
    const apiUrl = '/user/view/';

    async function fetchUserProfile() {
      try {
        const response = await API.get(apiUrl);

        if (response.status === 200) {
          const user_id = response.data.user_id;
          console.log('아이디:', user_id);
          setUser(user_id);
        } else {
          console.error('API 요청 실패:', response.status, response.data);
        }
      } catch (error) {
        console.error('API 호출 에러:', error);
      }
    }

    fetchUserProfile();
  }, []);

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

  const handleLogout = async () => {
    try {
      // 로컬 스토리지에서 토큰 삭제
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user_id');
      localStorage.removeItem('userInfo');

      // 로그인 상태 업데이트
      setIsLoggedIn(false);
      navigate('/signin');

      // 로그아웃 성공 알림
      alert('성공적으로 로그아웃되었습니다.');
    } catch (error) {
      console.error('로그아웃 처리 중 오류 발생:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  return (
    <S.HeaderWrapper>
      <S.LogoContainer>
        <Link to={`/PMain`}>
          <S.Logo>
            <S.LogoImg src='/Header/Logo.png' />
          </S.Logo>
        </Link>
        <S.NavbarLine>
          <S.NavbarLineImg
            src='/Header/NavBarLine.png'
            onClick={toggleSideBar}
          />
        </S.NavbarLine>
      </S.LogoContainer>

      <S.SidebarWrapper ref={sideBarRef}>
        {isLoggedIn ? (
          <S.UserInfo>
            <S.UserProfile src='/Header/UserProfile.png' />
            <S.UserName>{user_id}</S.UserName>
          </S.UserInfo>
        ) : (
          <Link to='/Signin' onClick={closeSideBar}>
            <S.LoginContainer>
              <S.SideBarIcon src='/Header/HeadLoginIcon.png' />
              <S.LogoutText>로그인</S.LogoutText>
            </S.LoginContainer>
          </Link>
        )}
        <div onClick={() => handleIconClick('/PMain')}>
          <S.PoliContainer>
            <S.SideBarIcon src='/Header/HeadProIcon.png' />
            <S.SideBarText>정치인 프로필</S.SideBarText>
          </S.PoliContainer>
        </div>
        <div onClick={() => handleIconClick('/Community')}>
          <S.PoliContainer>
            <S.SideBarIcon src='/Header/HeadComIcon.png' />
            <S.SideBarText>오늘의 쟁점</S.SideBarText>
          </S.PoliContainer>
        </div>
        <div onClick={() => handleIconClick('/quiz')}>
          <S.PoliContainer>
            <S.SideBarIcon src='/Header/HeadQuizIcon.png' />
            <S.SideBarText>퀴즈</S.SideBarText>
          </S.PoliContainer>
        </div>
        {isLoggedIn && ( // 로그인 상태에 따라 다른 구분선 표시
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
        )}
        {isLoggedIn && ( // 로그인 상태에 따라 다른 링크 또는 버튼 표시
          <div
            onClick={() => {
              closeSideBar();
              handleLogout();
            }}
          >
            <S.LogoutContainer>
              <S.LogoutIcon src='/Header/HeadLogoutIcon.png' />
              <S.LogoutText>로그아웃</S.LogoutText>
            </S.LogoutContainer>
          </div>
        )}
      </S.SidebarWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
