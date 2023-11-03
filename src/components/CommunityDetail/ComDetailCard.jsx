import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

function ComDetailCard({ title, content }) {
  return (
    <S.ComDetailCardWrapper>
      <S.Cardbg>
        <S.CardTitleContainer>
          <S.CardChar>
            <S.CardCharImg scr='' />
          </S.CardChar>
          <S.CardTitle>{title}</S.CardTitle>
        </S.CardTitleContainer>
        <S.CardContent>{content}</S.CardContent>
      </S.Cardbg>
    </S.ComDetailCardWrapper>
  );
}

export default ComDetailCard;
