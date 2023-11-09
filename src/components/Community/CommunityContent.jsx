import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

function CommunityContent({ id, title, status, content, style }) {
  return (
    <Link to={`/communityDetail/${id}`}>
      <S.ContentWrapper style={style}>
        <S.ContentBg>
          <S.ContentTitleWrapper>
            <S.ContentTitle>{title}</S.ContentTitle>
            {/* <S.VoteStatus>{status}</S.VoteStatus> */}
          </S.ContentTitleWrapper>
          <S.ContentText>{content}</S.ContentText>
        </S.ContentBg>
      </S.ContentWrapper>
    </Link>
  );
}

export default CommunityContent;
