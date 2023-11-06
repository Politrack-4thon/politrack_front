import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

function ComDetailCard({ idea, ideaDes }) {
  return (
    <S.ComDetailCardWrapper>
      <S.Cardbg>
        <S.CardTitleContainer>
          <S.CardChar>{/* <S.CardCharImg src='' /> */}</S.CardChar>
          <S.CardTitle>{idea}</S.CardTitle>
        </S.CardTitleContainer>
        <S.CardContent>{ideaDes}</S.CardContent>
      </S.Cardbg>
    </S.ComDetailCardWrapper>
  );
}

export default ComDetailCard;
