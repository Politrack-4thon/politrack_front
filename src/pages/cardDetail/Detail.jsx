import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainVoteInfo from '../../components/Main/MainVoteInfo';
import MainSubTitle from '../../components/Main/MainSubTitle';
import * as S from '../../components/Main/style';
import * as R from './style';
import { API } from '../../api/axois';

function Detail() {
  let { MONA_CD } = useParams();
  const [cardData, setCardData] = useState(null);
  const [billsData, setBillsData] = useState([]);
  const [imgData, setImgData] = useState(null);
  const [isCardDetailSummVisible, setIsCardDetailSummVisible] = useState(true);
  const [isCardDetailBillVisible, setIsCardDetailBillVisible] = useState(true);
  const SERVER_URL = 'http://43.200.133.223/';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get(`politician/id/${MONA_CD}`);
        if (response.status === 200 && response.data) {
          const memberInfo = response.data[0]; // 국회의원 기본 정보
          const bills = response.data.slice(1); // 법률안 목록
          const img = 'http://43.200.133.223/' + memberInfo.jpg_link;

          setCardData(memberInfo);
          setBillsData(bills);
          setImgData(img);
        } else {
          console.error(
            'Error fetching community content:',
            response.statusText
          );
        }
      } catch (error) {
        console.error('Error fetching community content:', error);
      }
    }
    fetchData();
  }, [MONA_CD]);

  // 약력 문자열을 배열로 변환하는 함수
  const formatBio = (bio) => {
    // &bull;을 -로 바꾸기
    const updatedBio = bio
      .replace(/&bull;/g, '-')
      .replace(/&middot;/g, '-')
      .replace(/17&middot;19&middot;/g, '');

    return updatedBio.split('\r\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const getPartyColor = (partyName) => {
    if (partyName === '더불어민주당') {
      return '#004EA1';
    } else if (partyName === '국민의힘') {
      return '#FF0000';
    }
    return '#333'; // 기본 색상
  };

  // 당선횟수 계산 함수
  const calculateElectionWins = (unitsString) => {
    if (!unitsString) {
      return 0;
    }
    const terms = unitsString.split(',').map((term) => term.trim());
    return terms.length;
  };

  // 맨위로 이동하는 버튼 함수
  const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ width: '100%' }}>
      {cardData && (
        <>
          <S.MainCardContainer style={{ width: '100%', height: '429px' }}>
            <S.MainCardImage style={{ width: '150px', height: '150px' }}>
              <img
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '360px',
                }}
                src={imgData}
                alt='국회의원 이미지'
              />
            </S.MainCardImage>
            <S.MainCardParty
              style={{
                width: '163px',
                height: '40px',
                backgroundColor: getPartyColor(cardData.POLY_NM),
              }}
            >
              {cardData.POLY_NM}
            </S.MainCardParty>
            <S.MainCardName style={{ fontSize: '20px' }}>
              {cardData.HG_NM}&#40;{cardData.ENG_NM}&#41;
            </S.MainCardName>
            <S.MainCardDistrict style={{ fontSize: '12px' }}>
              {cardData.ORIG_NM}
            </S.MainCardDistrict>
            <S.MainCardUrl>
              <a
                href={cardData.HOMEPAGE}
                target='_blank'
                rel='noopener noreferrer'
              >
                <S.MainCardimg
                  src='\src\assets\images\card_home.svg'
                  alt='Home Logo'
                />
              </a>
            </S.MainCardUrl>
          </S.MainCardContainer>
          <R.cardDetailContainer>
            <R.cardDetailRow style={{ gap: '16px' }}>
              <MainVoteInfo
                icon='/src/assets/images/icon1.svg'
                title={'당선횟수'}
                value={`${calculateElectionWins(cardData.UNITS)}선`}
              />
              <S.MainVoteInfoContainer style={{ width: '55%', height: '83px' }}>
                <S.IconAndTitle>
                  <S.IconImg src='/src/assets/images/CardDetailImg.png' />
                  <S.IconImgTitle>소속위원회</S.IconImgTitle>
                </S.IconAndTitle>
                <S.Val>{cardData.CMITS}</S.Val>
              </S.MainVoteInfoContainer>
            </R.cardDetailRow>
            <MainSubTitle
              title='국회의원 약력'
              onClick={() =>
                setIsCardDetailSummVisible(!isCardDetailSummVisible)
              }
            />
            <R.cardDetailSummaryWrapper>
              {isCardDetailSummVisible && (
                <R.cardDetailSummary>
                  {formatBio(cardData.MEM_TITLE)}
                </R.cardDetailSummary>
              )}
            </R.cardDetailSummaryWrapper>
            <MainSubTitle
              title='최근 발의 법안'
              onClick={() =>
                setIsCardDetailBillVisible(!isCardDetailBillVisible)
              }
            />
            <R.CardDetailBillWrapper>
              {isCardDetailBillVisible &&
                billsData.map((bill, index) => (
                  <R.cardDetailBill key={index}>
                    {bill.BILL_NAME}
                    <R.billDetailBtn
                      onClick={() => window.open(bill.DETAIL_LINK, '_blank')}
                    >
                      상세보기
                    </R.billDetailBtn>
                  </R.cardDetailBill>
                ))}
            </R.CardDetailBillWrapper>
            <R.GotoTop onClick={MoveToTop}>
              <img src='\src\assets\images\gotoup_btn.svg'></img>
            </R.GotoTop>
          </R.cardDetailContainer>
        </>
      )}
    </div>
  );
}

export default Detail;
