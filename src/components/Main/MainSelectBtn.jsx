import React from 'react';
import * as S from './style';

function MainSelectBtn(props) {
  const handleClick = () => {
    props.onClick(props.polyName);
  };

  // isActive prop에 따라 버튼 색상을 결정합니다.
  const buttonStyle = props.isActive
    ? props.polyName === '더불어민주당'
      ? { backgroundColor: '#004EA1', color: 'white' }
      : { backgroundColor: '#FF0000', color: 'white' }
    : {};

  return (
    <S.ButtonContainer>
      <S.SelectButton onClick={handleClick} style={buttonStyle}>
        {props.polyName}
      </S.SelectButton>
    </S.ButtonContainer>
  );
}

export default MainSelectBtn;
