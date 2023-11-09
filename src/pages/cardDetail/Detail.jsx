import React from 'react';

import { useParams } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';

import MainVoteInfo from "../../components/Main/MainVoteInfo";
import MainSubTitle from "../../components/Main/MainSubTitle";

import * as S from '../../components/Main/style'
import * as R from './style';

import { API } from '../../api/axois';

function Detail(props) {
  const params = useParams();
  const {homeLogoUrl, instagramLogoUrl } = props;

  const [isCardDetailSummVisible, setIsCardDetailSummVisible] = useState(true);
  const [isCardDetailBillVisible, setIsCardDetailBillVisible] = useState(true);

  const toggleCardDetailSumm = () => {
    setIsCardDetailSummVisible(!isCardDetailSummVisible);
  };

  const toggleCardDetailBill = () => {
    setIsCardDetailBillVisible(!isCardDetailBillVisible);
  }
  const [detilaDta,setDetilaData] = useState({
    POLY_NM : '', // 정당명
    HG_NM: '', // 한글 이름
    ENG_NM:'', // 영어 이름
    ORIG_NM:'', // 선거구명
    HOMEPAGE:'', // 홈페이지 링크
    UNITS: '3선', // 몇대 당선
    MEM_TITLE: '', // 약력
    BILL_NAME:'', // 법률안 명
    DETAIL_LINK: '', // 법률안 상세보기 링크
    CMITS:'', // 소속 위원회
})
const [cardData, setCardData] = useState({
    POLY_NM : '', // 정당명
    HG_NM: '', // 한글 이름
    ENG_NM:'', // 영어 이름
    ORIG_NM:'', // 선거구명
    HOMEPAGE:'', // 홈페이지 링크

  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get('/politician/poly/더불어민주당');
        setCardData(response.data); // data값들 상태 값 변경

        if (response.status === 200) {
          const data = response.data;
          setCardData(data);
        } else {
          console.error(
            'Error fetching community content:',
            response.statusText
          );
        }
      } catch (error) {
        console.error('Error fetching community content:', error);
        setCardData ({
          POLY_NM : '더불어민주당', // 정당명
          HG_NM: '김철수', // 한글 이름
          ENG_NM:'KIM CHUL SU', // 영어 이름
          ORIG_NM:'중구 성동구 갑', // 선거구명
          HOMEPAGE:'#', // 홈페이지 링크
        })
      }
    }

    fetchData();
  }, []);
  
  // 디테일 
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get('/politician/id/MONA_CD');
        setDetilaData(response.data); // data값들 상태 값 변경

        if (response.status === 200) {
          const data = response.data;
          setDetilaData(data);
        } else {
          console.error(
            'Error fetching community content:',
            response.statusText
          );
        }
      } catch (error) {
        console.error('Error fetching community content:', error);
        setDetilaData ({
          POLY_NM : '더불어민주당', // 정당명
          HG_NM: '김철수', // 한글 이름
          ENG_NM:'KIM CHUL SU', // 영어 이름
          ORIG_NM:'중구 성동구 갑', // 선거구명
          HOMEPAGE:'#', // 홈페이지 링크
          UNITS: '3선', // 몇대 당선
          MEM_TITLE: '', // 약력
          BILL_NAME:'', // 법률안 명
          DETAIL_LINK: '', // 법률안 상세보기 링크
          CMITS:'', // 소속 위원회
        })
      }
    }

    fetchData();
  }, [MONA_CD]);

  const handleDetailLink = () => {
    if(detilaDta.DETAIL_LINK) {
        window.open(detilaDta.DETAIL_LINK, '_blank');
    }
  }


  return (

    <div style ={{width:'100%'}}>
        <S.MainCardContainer style={{width: '100%', height: '429px'}}>
            <S.MainCardImage style={{width: '150px', height: '150px'}}>
                <img src='src/assets/images/default_profile.png' alt="국회의원 이미지" />
            </S.MainCardImage>
            <S.MainCardParty style={{width: '163px', height: '40px'}}>{cardData.POLY_NM}</S.MainCardParty>
            <S.MainCardName style={{fontSize:'20px'}}>{cardData.HG_NM}&#40;{cardData.ENG_NM}&#41;</S.MainCardName>
            <S.MainCardDistrict style={{fontSize:'12px'}}>{cardData.ORIG_NM}</S.MainCardDistrict>
            <S.MainCardUrl>
                <a href={cardData.HOMEPAGE} target="_blank" rel="noopener noreferrer">
                    <img src='\src\assets\images\card_home.svg' alt="Home Logo" />
                </a>
            </S.MainCardUrl>
        </S.MainCardContainer>
        <R.cardDetailContainer>
            <R.cardDetailRow style={{gap: '16px'}}>
                <MainVoteInfo 
                  icon="/src/assets/images/icon1.svg"
                  title={"당선횟수"}
                  value={detilaDta.UNITS}
                />
                <S.MainVoteInfoContainer style={{width: '226.9px', height: '83px'}}>
                    <S.IconAndTitle>
                        <img src='/src/assets/images/Frame 41.png'/>
                    </S.IconAndTitle>
                    <S.Val>{detilaDta.CMITS}</S.Val>
                </S.MainVoteInfoContainer>
            </R.cardDetailRow>
            <MainSubTitle 
            title="국회의원 약력"
            onClick={toggleCardDetailSumm}
            />
            {isCardDetailSummVisible && (
            <R.cardDetailSummary>{detilaDta.MEM_TITLE}</R.cardDetailSummary>
            )};
            <MainSubTitle 
            title="최근 발의 법안"
            onClick={toggleCardDetailBill}
            />
            {isCardDetailBillVisible && (
            <R.cardDetailBill>
                {detilaDta.BILL_NAME}
                <R.billDetailBtn onClick={handleDetailLink}>상세보기</R.billDetailBtn> 
            </R.cardDetailBill>
            )};

        </R.cardDetailContainer>    
    </div>
    )


}


export default Detail;