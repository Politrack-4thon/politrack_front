import React from "react";
import * as S from "./style";

function CardDetailThumnail(props) {
    const { partyName, name, district, homeLogoUrl, instagramLogoUrl } = props;
    return (
        <S.ThumnailContainer>
            <S.ThumnailImage>
                <img src='' alt="국회의원 이미지" />
            </S.ThumnailImage>
            <S.ThumnailParty>{partyName}</S.ThumnailParty>
            <S.ThumnailName>{name}</S.ThumnailName>
            <S.ThumnailDistrict>{district}</S.ThumnailDistrict>
            <S.ThumnailUrl>
                <a href={homeLogoUrl} target="_blank" rel="noopener noreferrer">
                    <img src='\src\assets\images\card_home.svg' alt="Home Logo" />
                </a>
                <a href={instagramLogoUrl} target="_blank" rel="noopener noreferrer">
                    <img src='\src\assets\images\card_insta.svg' alt="Instagram Logo" />
                </a>
            </S.ThumnailUrl>
        </S.ThumnailContainer>
    );
}

export default CardDetailThumnail;