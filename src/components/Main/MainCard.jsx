import React from "react";
import { Link } from 'react-router-dom';
import * as S from "./style";

function MainCard(props) {
    const {homeLogoUrl, instagramLogoUrl } = props;
    return (
        <S.MainCardContainer style={{width: '170px', height: '230px', marginLeft: '20px'}}>
            <Link to ={`/Detail/:${props.id}`}>
                <S.MainCardImage style={{width: '84px', height: '84px'}}>
                    <img src='' alt="국회의원 이미지" />
                </S.MainCardImage>
            </Link>
            <S.MainCardParty style={{width: '70px', height: '24px'}}>{props.partyName}</S.MainCardParty>
            <S.MainCardName style={{fontSize:'12px'}}>{props.name}</S.MainCardName>
            <S.MainCardDistrict>{props.district}</S.MainCardDistrict>
            <S.MainCardUrl>
                <a href={homeLogoUrl} target="_blank" rel="noopener noreferrer">
                    <img src='\src\assets\images\card_home.svg' alt="Home Logo" />
                </a>
                <a href={instagramLogoUrl} target="_blank" rel="noopener noreferrer">
                    <img src='\src\assets\images\card_insta.svg' alt="Instagram Logo" />
                </a>
            </S.MainCardUrl>
        </S.MainCardContainer>
    );
}

export default MainCard;