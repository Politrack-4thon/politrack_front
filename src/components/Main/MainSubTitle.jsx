import React from 'react';
import * as S from './style';

function MainSubTitle(props) {
  const arrow = {
    cursor: 'pointer',
  };

  const handleArrowClick = () => {
    // arrow를 클릭할 때 토글 함수를 호출하도록 수정
    props.onClick();
  };
  return (
    <S.MainBarWrapper>
      <S.MainSubTitleBar style={props.style}>
        <S.SubTitle>{props.title}</S.SubTitle>
        <img
          style={arrow}
          src='\src\assets\images\arrow_back.svg'
          onClick={handleArrowClick}
        />
      </S.MainSubTitleBar>
    </S.MainBarWrapper>
  );
}

export default MainSubTitle;
