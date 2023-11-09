import React from 'react';
import * as S from './style';

function MainVoteResult(props) {
  const names = [
    {
      id: 1,
      name: '더불어민주당',
    },
    {
      id: 2,
      name: '국민의 힘',
    },
  ];

  return (
    <S.MainVoteResultContainer>
      <S.Party1>
        <div>{names[0].name}</div>
        <div>{props.party1}</div>
      </S.Party1>
      <S.Party2>
        <div>{names[1].name}</div>
        <div>{props.party2}</div>
      </S.Party2>
    </S.MainVoteResultContainer>
  );
}

export default MainVoteResult;
