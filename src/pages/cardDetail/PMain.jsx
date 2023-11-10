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

import { SubTitle } from '../../components/Main/style';


function PMain() {
  let region = 0;
  const MapImg = 'src/assets/images/map.png'
  const defaultImageSrc = 'src/assets/images/default_profile.png';

  const [isVoteInfoVisible, setIsVoteInfoVisible] = useState(false);
  const [isVoteResultVisible, setIsVoteResultVisible] = useState(false);
  const [selectedParty, setSelectedParty] = useState(false); // 버튼을 선택하지 않은 상태
  const [party, setParty] = useState(null);
  const [markerStates, setMarkerStates] = useState({
    markerName: "",
    imgSrc: "src/assets/images/pin.png", // 초기 이미지 경로
  });
  const toggleVoteInfoVisibility = () => {
    setIsVoteInfoVisible(!isVoteInfoVisible);
  };

  const toggleVoteResultVisibility = () => {
    setIsVoteResultVisible(!isVoteResultVisible);
  };

  const [hiddenElements, setHiddenElements] = useState(false); // 초기값은 보이도록 설정

  const partyVisibility = () => {
    setSelectedParty(!selectedParty);
    setParty(party);
  }
  const handleMarkerClick = markerName => {
    setMarkerStates({
      markerName: markerName,
      imgSrc: 'src/assets/images/pin_click.png', // 클릭한 마커에 해당하는 이미지로 업데이트
    });

    setHiddenElements(true); // 숨겨줌
  }

 

  const [data, setData] = useState({
    POLY_NM : '', // 정당명
    HG_NM: '', // 한글 이름
    ENG_NM:'', // 영어 이름
    ORIG_NM:'', // 선거구명
    HOMEPAGE:'', // 홈페이지 링크
    MONA_CD:'',
    jpg_link:'',

  });

  // 정당별 API
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get('/politician/poly/더불어민주당');
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
          ENG_NM:'KIM CHUL SU', // 영어 이름
          ORIG_NM:'중구 성동구 갑', // 선거구명
          HOMEPAGE:'#', // 홈페이지 링크
          MONA_CD:'',
          jpg_link:'',
        })
      }
    }

    fetchData();
  }, []);

  // 선거구별 API
  const [origData, setorigData] = useState({
    POLY_NM : '', // 정당명
    HG_NM: '', // 한글 이름
    ENG_NM:'', // 영어 이름
    ORIG_NM:'', // 선거구명
    HOMEPAGE:'', // 홈페이지 링크
    MONA_CD:'',
    jpg_link:'',

  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get(`/politician/orig/${markerStates.markerName}`);
        setorigData(response.data); // update origData state
  
        if (response.status === 200) {
          const data = response.data;
          setorigData(data);
        } else {
          console.error('Error fetching community content:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching community content:', error);
        setorigData({
          POLY_NM: '더불어민주당',
          HG_NM: '김철수',
          ENG_NM: 'KIM CHUL SU',
          ORIG_NM: '중구 성동구 갑',
          HOMEPAGE: '#',
          MONA_CD: '',
          jpg_link: '',
        });
      }
    }
  
    fetchData();
  }, [markerStates.markerName]);


  const dummyData = [
    {
      id: 1,
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
 
  return (
    <S.MainWrapper>
      <CommunityTop
        titlesub={'정치에 한 발자국 가까워지는 경험'}
        titleMain={'정치의 중심지, 서울의 \n 국회의원들을 확인해보세요!'}
        style={{ whiteSpace: 'pre-line' }}
      />
      <S.MainContainer>

        <MainSearch/>
        
        <S.Map>
          <S.MapImg src={MapImg} alt= "맵 이미지"/>

          <MainMap
          markerName = {"서울 은평구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'30px'}
          clickbeforetop={'40px'}
          clickafterleft={'126px'}
          clickbeforeleft={'136px'}
               
          />
          <MainMap
          markerName = {"서울 강서구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'80px'}
          clickbeforetop={'90px'}
          clickafterleft={'30px'}
          clickbeforeleft={'40px'}
               
          />
          <MainMap
          markerName = {"서울 광진구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'100px'}
          clickbeforetop={'110px'}
          clickafterleft={'265px'}
          clickbeforeleft={'275px'}
               
          />
          <MainMap
          markerName = {"서울 노원구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'20px'}
          clickbeforetop={'30px'}
          clickafterleft={'260px'}
          clickbeforeleft={'270px'}
               
          />
          <MainMap
          markerName = {"서울 용산구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'110px'}
          clickbeforetop={'120px'}
          clickafterleft={'170px'}
          clickbeforeleft={'180px'}               
          />
          <MainMap
          markerName = {"서울 동작구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'130px'}
          clickbeforetop={'140px'}
          clickafterleft={'150px'}
          clickbeforeleft={'160px'}              
          />
          <MainMap
          markerName = {"서울 영등포구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'120px'}
          clickbeforetop={'130px'}
          clickafterleft={'110px'}
          clickbeforeleft={'120px'}              
          />
          <MainMap
          markerName = {"서울 서대문구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'80px'}
          clickbeforetop={'80px'}
          clickafterleft={'30px'}
          clickbeforeleft={'150px'}              
          />
          <MainMap
          markerName = {"서울 송파구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'80px'}
          clickbeforetop={'150px'}
          clickafterleft={'30px'}
          clickbeforeleft={'300px'}              
          />
          <MainMap
          markerName = {"서울 마포구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'80px'}
          clickbeforetop={'90px'}
          clickafterleft={'110px'}
          clickbeforeleft={'120px'}              
          />
          <MainMap
          markerName = {"서울 중구성동구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'90px'}
          clickbeforetop={'100px'}
          clickafterleft={'210px'}
          clickbeforeleft={'220px'}              
          />
          <MainMap
          markerName = {"서울 서초구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'160px'}
          clickbeforetop={'170px'}
          clickafterleft={'200px'}
          clickbeforeleft={'210px'}              
          />
          <MainMap
          markerName = {"서울 강북구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'20px'}
          clickbeforetop={'30px'}
          clickafterleft={'200px'}
          clickbeforeleft={'210px'}              
          />
          <MainMap
          markerName = {"서울 강남구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'140px'}
          clickbeforetop={'150px'}
          clickafterleft={'240px'}
          clickbeforeleft={'250px'}              
          />
          <MainMap
          markerName = {"서울 중랑구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'60px'}
          clickbeforetop={'70px'}
          clickafterleft={'270px'}
          clickbeforeleft={'280px'}              
          />
          <MainMap
          markerName = {"서울 동대문구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'70px'}
          clickbeforetop={'80px'}
          clickafterleft={'240px'}
          clickbeforeleft={'250px'}              
          />
          <MainMap
          markerName = {"서울 도봉구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'5px'}
          clickbeforetop={'10px'}
          clickafterleft={'220px'}
          clickbeforeleft={'230px'}              
          />
          <MainMap
          markerName = {"서울 관악구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'170px'}
          clickbeforetop={'180px'}
          clickafterleft={'150px'}
          clickbeforeleft={'160px'}              
          />
          <MainMap
          markerName = {"서울 양천구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'120px'}
          clickbeforetop={'130px'}
          clickafterleft={'60px'}
          clickbeforeleft={'70px'}              
          />
          <MainMap
          markerName = {"서울 구로구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'150px'}
          clickbeforetop={'160px'}
          clickafterleft={'60px'}
          clickbeforeleft={'70px'}              
          />
          <MainMap
          markerName = {"서울 강동구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'100px'}
          clickbeforetop={'110px'}
          clickafterleft={'310px'}
          clickbeforeleft={'320px'}              
          />
          <MainMap
          markerName = {"서울 금천구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'170px'}
          clickbeforetop={'180px'}
          clickafterleft={'110px'}
          clickbeforeleft={'120px'}              
          />
          <MainMap
          markerName = {"서울 종로구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'40px'}
          clickbeforetop={'50px'}
          clickafterleft={'170px'}
          clickbeforeleft={'180px'}              
          />
          <MainMap
          markerName = {"서울 성북구"}
          markerStates={markerStates}
          handleMarkerClick={handleMarkerClick}
          clickaftertop={'50px'}
          clickbeforetop={'60px'}
          clickafterleft={'200px'}
          clickbeforeleft={'210px'}              
          />
        </S.Map>
        <S.Border style={{ display: hiddenElements ? 'none' : 'block' }}/>
        <MainSubTitle 
        title={dummyData2[region].title}
        onClick={toggleVoteInfoVisibility}
        style={{ display: hiddenElements ? 'none' : 'flex' }}
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


        <S.Border style={{ display: hiddenElements ? 'none' : 'block' }}/>
        <MainSubTitle 
        title='제 21대 국회의원 선거 결과'
        onClick={toggleVoteResultVisibility}
        style={{ display: hiddenElements ? 'none' : 'flex' }}
        />
        {isVoteResultVisible && (
        <MainVoteResult
        party1 = {dummyData2[region].더불어민주당}
        party2 = {dummyData2[region].국민의힘}
        
        />
        )}
        <S.Border style={{ display: hiddenElements ? 'none' : 'block' }}/>
        <SubTitle style={{ display: hiddenElements ? 'none' : 'block' }}>
          아래 각 당을 선택하여 <br></br>
        당선된 국회의원들을 확인해보세요</SubTitle>

        <S.MainSelectBtnContainer  style={{ display: hiddenElements ? 'none' : 'flex' }}>
        <MainSelectBtn 
        polyName='더불어민주당'
        onClick={partyVisibility}
        />
        <MainSelectBtn 
        polyName='국민의힘'
        onClick={partyVisibility}
        />
        </S.MainSelectBtnContainer>

        {selectedParty && (
        <S.Cards  style={{ display: hiddenElements ? 'none' : 'grid' }}>
          {(data.length > 0 ? data : dummyData).map((content) => (
            <Link to={`/id/${content.MONA_CD}`}>

            <MainCard
              jpg_link = {content.jpg_link}
              POLY_NM={content.POLY_NM}
              HG_NM={content.HG_NM}
              ENG_NM = {content.ENG_NM}
              ORIG_NM={content.ORIG_NM}
              HOMEPAGE={content.HOMEPAGE}
            />
            </Link>
          ))}      
        </S.Cards>  
        )}

        <S.selectOrigWrapper style={{ display: hiddenElements ? 'block' : 'none' }}>
          <S.SelectOrigTitle>현재 선택된 구는 {markerStates.markerName}입니다</S.SelectOrigTitle>
          <S.SelectOrigSubTitle>"{markerStates.markerName}"는 투표구수가 71개, 선거인수가 262,308명 존재합니다</S.SelectOrigSubTitle>
          <S.Cards style={{ display: hiddenElements ? 'grid' : 'none' }}>

          {(origData.length > 0 ? origData : dummyData).map((content) => (
            <Link to={`/id/${content.MONA_CD}`}>

            <MainCard
              jpg_link = {content.jpg_link}
              POLY_NM={content.POLY_NM}
              HG_NM={content.HG_NM}
              ENG_NM = {content.ENG_NM}
              ORIG_NM={markerStates.markerName}
              HOMEPAGE={content.HOMEPAGE}
            />
            </Link>
          ))}    
          </S.Cards>  

        </S.selectOrigWrapper>
      </S.MainContainer>
    </S.MainWrapper>
  );
}

export default PMain;
