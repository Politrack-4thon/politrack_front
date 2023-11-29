import React from 'react';
import * as S from './style';


function AnswerDes({ isCorrect, answerDes, onClose }) {
  return (
    <S.AnswerWrapper>
      <S.Answer>
        {isCorrect ? (
          <S.AnswerContainer>
            <S.AnswerText>정답입니다!</S.AnswerText>
            <S.AnswerImg src='src/assets/images/correct.svg' />
          </S.AnswerContainer>
        ) : (
          <S.AnswerContainer>
            <S.AnswerText>오답입니다</S.AnswerText>
            <S.AnswerImg src='src/assets/images/incorrect.svg' />
          </S.AnswerContainer>
        )}
        <S.AnswerDes>{answerDes}</S.AnswerDes>
        <S.AnswerBtn>
          <S.Button onClick={onClose}>확인</S.Button>
        </S.AnswerBtn>
      </S.Answer>
    </S.AnswerWrapper>
  );
}

export default AnswerDes;
