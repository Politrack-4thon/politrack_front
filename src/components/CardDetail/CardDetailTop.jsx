import React from "react";
import * as S from "../../pages/cardDetail/style";

function CardDetailTop() {
    return (
        <S.DetailWrapper>
            <S.DetailTitle>
                <S.DetailVoteLogo>
                    <S.VoteLogo src='/Community/VoteLogo.png' />
                </S.DetailVoteLogo>
                <S.DetailTitleTop>
                    정치에 한 발자국 가까워지는 경험
                </S.DetailTitleTop>
                <S.DetailTitleBottom>
                    정치의 중심지, 서울의  <br />
                    국회의원들을 확인해보세요!
                </S.DetailTitleBottom>
            </S.DetailTitle>
        </S.DetailWrapper>
  
    )
}
export default CardDetailTop;