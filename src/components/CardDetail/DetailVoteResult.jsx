import React from "react";
import * as S from "./style";

function DetailVoteResult(props) {
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
    <S.DetailVoteResultContainer>
        <S.Party1>{names[0].name}  {props.party1}</S.Party1>
        <S.Party2>{names[1].name} {props.party2}</S.Party2>
    </S.DetailVoteResultContainer>
    );
}

export default DetailVoteResult;