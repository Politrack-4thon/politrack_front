import React from 'react';
import * as S from './style';

import CommunityTop from '../../components/Community/CommunityTop';
import CommunityQuestion from '../../components/Community/CommunityQuestion';
import QuizCard from '../../components/Quiz/QuizCard';
function Quiz() {
  return (
  <S.QuizWrapper>
      <CommunityTop
        titlesub={'정치에 한 발자국 가까워지는 경험'}
        titleMain={'정치의 중심지, 서울의 \n 국회의원들을 확인해보세요!'}
        style={{ whiteSpace: 'pre-line' }}
      />
      <CommunityQuestion
        subQuestion={'얼마나 알고있나요?'}
        mainQuestion={'퀴즈를 풀어 나의 레벨을 확인하세요!'}
      />
      <QuizCard/>


  </S.QuizWrapper>
  );
}

export default Quiz;
