import React from "react";
import * as S from "./style";

function LocalVoteInfo(props) {
    return (
        <S.LocalVoteContainer>
            <S.IconTitle>
                <img src={props.icon}/>
                {props.title}
            </S.IconTitle>
            <S.Value>{props.value}</S.Value>
        </S.LocalVoteContainer>
    );
}

export default LocalVoteInfo;