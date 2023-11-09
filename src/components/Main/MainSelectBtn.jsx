import React from "react";
import * as S from "./style";

function MainSelectBtn(props) {
  const handleClick =() => {
    

    props.onClick(props.polyName);
  }
      
  return (
    <S.ButtonContainer>
      <S.SelectButton onClick={handleClick}>{props.polyName}</S.SelectButton>
    </S.ButtonContainer>
  );
}

export default MainSelectBtn;