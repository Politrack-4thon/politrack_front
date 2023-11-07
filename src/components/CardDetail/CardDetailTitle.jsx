import React from "react";
import * as S from "./style";

function CardDetailTitle(props) {
    const arrow = {
        cursor:"pointer",
    }
    return (
        <S.CardDetailTitleBar>
            <S.DetailTitle>{props.title}</S.DetailTitle>
            <img style={arrow} src="\src\assets\images\arrow_back.svg"></img>
        </S.CardDetailTitleBar>
    );
}

export default CardDetailTitle;