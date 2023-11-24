import React from "react";
import * as S from "./style";


const MainSearchError = ({ onClose }) => {
    
    return (
    <S.SearchErrorContainer>
        <S.SearchErrorContent1>검색하신 국회의원이 존재하지 않아요</S.SearchErrorContent1>
        <S.SearchErrorContent2>정확한 이름으로 다시 검색해주세요!</S.SearchErrorContent2>
        <S.SearchErrorBtn onClick={onClose}>확인</S.SearchErrorBtn>
    </S.SearchErrorContainer>
    );
}

export default MainSearchError;