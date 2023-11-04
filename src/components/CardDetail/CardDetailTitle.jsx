import React from "react";
import * as S from "../../pages/cardDetail/style";

function CardDetailTitle(props) {
    const arrow = {
        cursor:"pointer",
    }
    return (
        <S.CardDetailTitleBar>
            <S.CardDetailTitle>{props.title}</S.CardDetailTitle>
            <img style={arrow} src="\src\assets\images\arrow_back.svg"></img>
        </S.CardDetailTitleBar>
    );
}

export default CardDetailTitle;