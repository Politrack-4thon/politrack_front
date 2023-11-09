import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './style';
import IntroFirst from '../../components/Intro/IntroFirst';
import IntroSecond from '../../components/Intro/IntroSecond';

function Intro() {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <ul style={{ margin: '0' }}>{dots}</ul>
      </div>
    ),
  };

  const sliderRef = useRef(null);

  const handleBeforeChange = (oldIndex, newIndex) => {
    sliderRef.current.slickGoTo(newIndex); // 슬라이드 이동
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Slider
        {...sliderSettings}
        beforeChange={handleBeforeChange}
        ref={sliderRef}
      >
        <S.IntroWrapper>
          <IntroFirst />
        </S.IntroWrapper>
        <S.IntroWrapper>
          <IntroSecond />
        </S.IntroWrapper>
      </Slider>
    </div>
  );
}

export default Intro;
