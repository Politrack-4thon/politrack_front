import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

import CommunityTop from '../../components/Community/CommunityTop';
import QuizQuestion from '../../components/Quiz/QuizQuestion';
import QuizCard from '../../components/Quiz/QuizCard';

function Quiz() {
  const navigate = useNavigate();
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false); // 사용자가 로그인한 상태를 추적

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      setUserIsLoggedIn(true);
    } else {
      setUserIsLoggedIn(false);
      // 로그인하지 않은 상태면 경고 메시지 표시
      alert('로그인이 필요한 페이지입니다.');
      navigate('/signin');
    }
  }, [navigate]);

  const handleLoginRequiredPage = () => {
    if (userIsLoggedIn) {
      // 로그인한 상태면 페이지 접근 허용
      return (
        <S.QuizWrapper>
          <CommunityTop
            titlesub={'기초 용어부터 차근차큰'}
            titleMain={'어려운 정치용어, \n폴리트랙에서 알아가요!'}
            style={{ whiteSpace: 'pre-line' }}
          />
          <QuizQuestion
            subQuestion={'얼마나 알고있나요?'}
            mainQuestion={'퀴즈를 풀어 나의 레벨을 확인하세요!'}
          />
          <QuizCard />
        </S.QuizWrapper>
      );
    } else {
      return null; // 빈 페이지 반환
    }
  };

  return handleLoginRequiredPage();
}

export default Quiz;
