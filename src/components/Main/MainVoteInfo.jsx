import React from "react";
import * as S from "./style";

function MainVoteInfo(props) {
    return (
        <S.MainVoteInfoContainer>
            <S.IconAndTitle>
                <img src={props.icon}/>
                {props.title}
            </S.IconAndTitle>
            <S.Val>{props.value}</S.Val>
        </S.MainVoteInfoContainer>
    );
}

export default MainVoteInfo;