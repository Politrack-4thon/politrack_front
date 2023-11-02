import React from 'react';
import * as S from './style';

function Community() {
  return (
    <S.CommunityWrapper>
      <S.CommuTitle>
        <S.CommuVoteLogo>
          <S.VoteLogo src='/Community/VoteLogo.png' />
        </S.CommuVoteLogo>
        <S.CommuTitleTop>
          발전하는 우리나라를 만들어 나가기 위한 첫걸음
        </S.CommuTitleTop>
        <S.CommuTitleBottom>
          어려운 정치이슈, <br />
          플리트랙에서 이야기 해봐요!
        </S.CommuTitleBottom>
      </S.CommuTitle>
    </S.CommunityWrapper>
  );
}

export default Community;
