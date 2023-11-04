import React from 'react';
import * as S from './style';
import CardDetailTop from '../../components/CardDetail/CardDetailTop';
import CardDetailMap from '../../components/CardDetail/CardDetailMap';
import CardDetailButton from '../../components/CardDetail/CardDetailButton';
import CardDetailTitle from '../../components/CardDetail/CardDetailTitle';
import LocalVoteInfo from '../../components/CardDetail/LocalVoteInfo';


function Detail() {
    
    
  return (
    <S.DetailWrapper>
      <CardDetailTop/>
      <CardDetailMap/>
      <CardDetailTitle title='대한민국 정치의 중심지, 서울'/>
      <S.LocalVoteInfoContainer>
        <LocalVoteInfo icon="" title = "선거구 수" />
        <LocalVoteInfo icon="" title = "선거구 수" />
        <LocalVoteInfo icon="" title = "선거구 수" />
      </S.LocalVoteInfoContainer>
      
      <CardDetailTitle title='제 21대 국회의원 선거 결과'/>

      <CardDetailButton/>
    </S.DetailWrapper>
  );
}

export default Detail;