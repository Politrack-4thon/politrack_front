import React from "react";
import * as S from "../../pages/cardDetail/style";

function LocalVoteInfo(props) {
    return (
        <S.LocalVoteContainer>
            <div>
                <img src={props.icon}/>
                {props.title}
            </div>
            <div></div>
        </S.LocalVoteContainer>
    );
}

export default LocalVoteInfo;