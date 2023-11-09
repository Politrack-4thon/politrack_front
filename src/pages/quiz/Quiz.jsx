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
    // 로그인 여부 확인 (예: 로컬 스토리지에서 토큰 검사)
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      // 토큰이 존재하면 로그인한 것으로 간주
      setUserIsLoggedIn(true);
    } else {
      // 토큰이 없으면 로그인하지 않은 상태
      setUserIsLoggedIn(false);
      // 로그인하지 않은 상태면 경고 메시지 표시
      alert('로그인이 필요한 페이지입니다.');
      navigate('/signin'); // 로그인 페이지로 이동
    }
  }, [navigate]);

  const handleLoginRequiredPage = () => {
    if (userIsLoggedIn) {
      // 로그인한 상태면 페이지 접근 허용
      return (
        <S.QuizWrapper>
          <CommunityTop
            titlesub={'정치에 한 발자국 가까워지는 경험'}
            titleMain={'정치의 중심지, 서울의 \n 국회의원들을 확인해보세요!'}
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
