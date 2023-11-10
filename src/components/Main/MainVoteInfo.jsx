import React from 'react';
import * as S from './style';

function MainVoteInfo(props) {
  return (
    <S.MainVoteInfoContainer style={{ width: '30%', height: '83px' }}>
      <S.IconAndTitle>
        <S.IconImg src={props.icon} />
        <S.IconImgTitle>{props.title}</S.IconImgTitle>
      </S.IconAndTitle>
      <S.Val>{props.value}</S.Val>
    </S.MainVoteInfoContainer>
  );
}

export default MainVoteInfo;
