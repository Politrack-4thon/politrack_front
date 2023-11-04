import React from "react";
import * as S from "../../pages/cardDetail/style";

export default function CardDetailButton(props) {
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
                <S.CardDetailButton key={data.id}>{data.name}</S.CardDetailButton>
            )
            })}
        </S.ButtonContainer>
);
}