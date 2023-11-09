import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

function MainCard(props) {
  return (
    // <S.MainCardWhole>
    <S.MainCardContainer>
      <Link to={`/Detail/:${props.id}`}>
        <S.MainCardImage style={{ width: '84px', height: '84px' }}>
          <img
            src='src/assets/images/default_profile.png'
            alt='국회의원 이미지'
          />
        </S.MainCardImage>
      </Link>
      <S.MainCardParty style={{ width: '70px', height: '24px' }}>
        {props.POLY_NM}
      </S.MainCardParty>
      <S.MainCardName style={{ fontSize: '12px' }}>
        {props.HG_NM}&#40;{props.ENG_NM}&#41;
      </S.MainCardName>
      <S.MainCardDistrict>{props.ORIG_NM}</S.MainCardDistrict>
      <S.MainCardUrl>
        <a href={props.HOMEPAGE} target='_blank' rel='noopener noreferrer'>
          <img src='\src\assets\images\card_home.svg' alt='Home Logo' />
        </a>
      </S.MainCardUrl>
    </S.MainCardContainer>
    // </S.MainCardWhole>
  );
}

export default MainCard;
