import React from 'react';
import * as S from './style';

function CommunityTop({ titlesub, titleMain, style }) {
  return (
    <S.CommunityWrapper>
      <S.CommuTitle>
        <S.CommuVoteLogo>
          <S.VoteLogo src='/Community/VoteLogo.png' />
        </S.CommuVoteLogo>
        <S.CommuTitleTop>{titlesub}</S.CommuTitleTop>
        <S.CommuTitleBottom style={style}>{titleMain}</S.CommuTitleBottom>
      </S.CommuTitle>
    </S.CommunityWrapper>
  );
}

export default CommunityTop;
