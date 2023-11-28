import React from 'react';
import * as S from './style';
import IntroFirst from '../../components/Intro/IntroFirst';

function Intro() {
  return (
    <S.IntroWhole>
      <S.IntroWrapper>
        <IntroFirst />

        {/* <IntroSecond /> */}
      </S.IntroWrapper>
    </S.IntroWhole>
  );
}

export default Intro;
