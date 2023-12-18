import React from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

function ComDetailNews({ linkUrl }) {
    const navigate = useNavigate();

  const handleNewsClick = () => {
    window.open(linkUrl, '_blank'); 
  };

  return (
    <S.ComDetailNewsWrapper onClick={handleNewsClick}>
        <S.articleImg ><img src='/src/assets/images/article1.png'/></S.articleImg>
        <S.articleText>국내 일간지</S.articleText>

    </S.ComDetailNewsWrapper>
  );
}
export default ComDetailNews;