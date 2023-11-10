import React, { useRef } from 'react';
//import Slider from 'react-slick';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';
import * as S from './style';
import IntroFirst from '../../components/Intro/IntroFirst';
//import IntroSecond from '../../components/Intro/IntroSecond';

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
