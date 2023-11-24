import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const votingInProgressStyles = {
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid #484A64',
};

const votingClosedStyles = {
  backgroundColor: '#484A64',
  color: 'white',
};

function CommunityContent({ id, title, status, content, style }) {
  const statusStyle =
    status === '투표진행중' ? votingInProgressStyles : votingClosedStyles;

  return (
    <Link to={`/communityDetail/${id}`}>
      <S.ContentWrapper style={style}>
        <S.ContentBg>
          <S.ContentTitleWrapper>
            <S.ContentTitle>{title}</S.ContentTitle>
            <S.VoteStatus style={statusStyle}>{status}</S.VoteStatus>
          </S.ContentTitleWrapper>
          <S.ContentText>{content}</S.ContentText>
        </S.ContentBg>
      </S.ContentWrapper>
    </Link>
  );
}

export default CommunityContent;
