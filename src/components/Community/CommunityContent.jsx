import React from 'react';
import * as S from './style';

function CommunityContent({ title, status, text, style }) {
  return (
    <S.ContentWrapper style={style}>
      <S.ContentBg>
        <S.ContentTitleWrapper>
          <S.ContentTitle>{title}</S.ContentTitle>
          <S.VoteStatus>{status}</S.VoteStatus>
        </S.ContentTitleWrapper>
        <S.ContentText>{text}</S.ContentText>
      </S.ContentBg>
    </S.ContentWrapper>
  );
}

export default CommunityContent;
