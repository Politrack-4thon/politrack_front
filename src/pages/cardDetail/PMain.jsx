import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { API } from '../../api/axois'; // 백엔드 API 모듈 import

import * as S from './style';
import CommunityTop from '../../components/Community/CommunityTop';
import MainMap from '../../components/Main/MainMap';
import MainSubTitle from '../../components/Main/MainSubTitle';
import MainSearch from '../../components/Main/MainSearch';
import MainVoteInfo from '../../components/Main/MainVoteInfo';
import MainVoteResult from '../../components/Main/MainVoteResult';
import MainSelectBtn from '../../components/Main/MainSelectBtn';
import MainCard from '../../components/Main/MainCard';

import { MainCardName, SubTitle } from '../../components/Main/style';

function PMain() {
  let region = 0;

  const [data, setData] = useState({
    POLY_NM: '', // 정당명
    HG_NM: '', // 한글 이름
    ENG_NM: '', // 영어 이름
    ORIG_NM: '', // 선거구명
    HOMEPAGE: '', // 홈페이지 링크
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get('/politician/poly/<str:poly_nm>');
        setData(response.data); // data값들 상태 값 변경

        if (response.status === 200) {
          const data = response.data;
          setData(data);
        } else {
          console.error(
            'Error fetching community content:',
            response.statusText
          );
        }
      } catch (error) {
        console.error('Error fetching community content:', error);
        setData({
          POLY_NM: '더불어민주당', // 정당명
          HG_NM: '김철수', // 한글 이름
          ENG_NM: 'KIM CHUL SU', // 영어 이름
          ORIG_NM: '중구 성동구 갑', // 선거구명
          HOMEPAGE: '#', // 홈페이지 링크
        });
      }
    }

    fetchData();
  }, []);

  const dummyData = [
    {
      id: 1,
      imageSrc: 'src/assets/images/congress_man1.png',
    },
    {
      id: 2,
      imageSrc: 'src/assets/images/congress_man1.png',
    },
  ];
  const dummyData2 = [
    // 지역별
    {
      title: '대한민국 정치의 중심지, 서울',
      constituency: '49개',
      votingPre: '2.25개',
      voter: '8,477.244명',
      더불어민주당: '41개',
      국민의힘: '8개',
    },
    {
      title: '경기도',
      constituency: '',
      votingPre: '',
      voter: '',
    },
  ];
  const defaultImageSrc = 'src/assets/images/default_profile.png';

  const [isVoteInfoVisible, setIsVoteInfoVisible] = useState(true);
  const [isVoteResultVisible, setIsVoteResultVisible] = useState(true);

  const toggleVoteInfoVisibility = () => {
    setIsVoteInfoVisible(!isVoteInfoVisible);
  };

  const toggleVoteResultVisibility = () => {
    setIsVoteResultVisible(!isVoteResultVisible);
  };

  return (
    <S.MainWrapper>
      <CommunityTop
        titlesub={'정치에 한 발자국 가까워지는 경험'}
        titleMain={'정치의 중심지, 서울의 \n 국회의원들을 확인해보세요!'}
        style={{ whiteSpace: 'pre-line' }}
      />
      <S.MainContainer>
        <MainSearch />
        <MainMap />
        <S.Border />
        <MainSubTitle
          title={dummyData2[region].title}
          onClick={toggleVoteInfoVisibility}
        />
        {isVoteInfoVisible && (
          <div>
            <S.MainVoteInfoContainer>
              <>
                <MainVoteInfo
                  icon='src/assets/images/icon1.svg'
                  title='선거구 수'
                  value={dummyData2[region].constituency}
                />
                <MainVoteInfo
                  icon='src/assets/images/icon2.png'
                  title='투표구 수'
                  value={dummyData2[region].votingPre}
                />
                <MainVoteInfo
                  icon='src/assets/images/icon3.svg'
                  title='선거인 수'
                  value={dummyData2[region].voter}
                />
              </>
            </S.MainVoteInfoContainer>
            <S.TextElectionCriteria>
              &#40;제 21대 국회의원 선거 기준&#41;{' '}
            </S.TextElectionCriteria>
          </div>
        )}
        <S.Border />
        <MainSubTitle
          title='제 21대 국회의원 선거 결과'
          onClick={toggleVoteResultVisibility}
        />
        {isVoteResultVisible && (
          <MainVoteResult
            party1={dummyData2[region].더불어민주당}
            party2={dummyData2[region].국민의힘}
          />
        )}
        ;
        <S.Border />
        <SubTitle>
          아래 각 당을 선택하여 <br></br>
          당선된 국회의원들을 확인해보세요
        </SubTitle>
        <MainSelectBtn />
        <S.Cards>
          {(data.length > 0 ? data : dummyData).map((content) => (
            <MainCard
              POLY_NM={content.POLY_NM}
              HG_NM={content.HG_NM}
              ORIG_NM={content.ORIG_NM}
              HOMEPAGE={content.HOMEPAGE}
            />
          ))}
        </S.Cards>
      </S.MainContainer>
    </S.MainWrapper>
  );
}

export default PMain;
