import React from 'react';
import * as S from './style';

function CommunityQuestion(props) {
  return (
    <S.QuestionWrapper>
      <S.QuestionContainer>
        <S.Question_sub>{props.subQuestion}</S.Question_sub>
        <S.Question_main>{props.mainQuestion}</S.Question_main>
      </S.QuestionContainer>
      <S.VoteResult>
        <S.VoteResultText>투표 결과 확인하기</S.VoteResultText>
      </S.VoteResult>
    </S.QuestionWrapper>
  );
}

export default CommunityQuestion;
