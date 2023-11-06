import React from "react";
import * as S from "./style";

function MainSelectBtn(props) {
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
        <S.ButtonContainer>
            {names.map(data => {
            return (
                <S.SelectButton key={data.id}>{data.name}</S.SelectButton>
                
                
            )
            })}
        </S.ButtonContainer>
        
);
}

export default MainSelectBtn;