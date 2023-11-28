import React from 'react';
import * as S from './style';

function ComDetailCard({ idea, ideaDes, img }) {
  return (
    <S.ComDetailCardWrapper>
      <S.Cardbg>
        <S.CardTitleContainer>
          <S.CardChar src={img}></S.CardChar>
          <S.CardTitle>{idea}</S.CardTitle>
        </S.CardTitleContainer>
        <S.CardContent>{ideaDes}</S.CardContent>
      </S.Cardbg>
    </S.ComDetailCardWrapper>
  );
}

export default ComDetailCard;
