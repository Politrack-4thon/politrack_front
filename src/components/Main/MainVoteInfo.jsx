import React from "react";
import * as S from "./style";

function MainVoteInfo(props) {
    return (
        <S.MainVoteInfoContainer style={{width: '107px', height: '83px'}}>
            <S.IconAndTitle>
                <img src={props.icon}/>
                {props.title}
            </S.IconAndTitle>
            <S.Val>{props.value}</S.Val>
        </S.MainVoteInfoContainer>
    );
}

export default MainVoteInfo;
