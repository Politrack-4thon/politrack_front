import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import MainSearchError from '../../components/Main/MainSearchError';

import { SubTitle } from '../../components/Main/style';

function PMain() {
  let region = 0;
  const MapImg = 'src/assets/images/map.png';
  const defaultImageSrc = 'src/assets/images/default_profile.png';

  const [isVoteInfoVisible, setIsVoteInfoVisible] = useState(false);
  const [isVoteResultVisible, setIsVoteResultVisible] = useState(false);
  const [selectedParty, setSelectedParty] = useState(false); // 버튼을 선택하지 않은 상태
  const [party, setParty] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리
  const [selectedMarker, setSelectedMarker] = useState(null); // 검색한 국회의원의 지역구 선택 상태
  const [tpgCount, setTpgCount] = useState(0);
  const [cfmtnElcnt, setCfmtnElcnt] = useState(0);

  const [markerStates, setMarkerStates] = useState({
    markerName: '',
    markerPolyName: '',
    imgSrc: 'src/assets/images/pin.png', // 초기 이미지 경로
    victPoly: '',
  });

  // Detail페이지에 정치인id 넘겨주기
  const HandleCardClick = (props) => {
    Navigate('/Detail', { state: props });
  };

  const [data, setData] = useState({
    POLY_NM: '', // 정당명
    HG_NM: '', // 한글 이름
    ENG_NM: '', // 영어 이름
    ORIG_NM: '', // 선거구명
    HOMEPAGE: '', // 홈페이지 링크
    MONA_CD: '',
    jpg_link: '',
    vict_poly: '',
    tpgCount: '',
    cfmtnElcnt: '',
  });

  // 정당 버튼을 클릭했을 때 실행되는 함수
  const PolipartyVisibility = (partyName) => {
    setSelectedParty(partyName); // 선택된 정당의 이름을 상태로 설정
  };

  // 정당별 API
  useEffect(() => {
    if (selectedParty) {
      setIsLoading(true); // 로딩 시작
      async function fetchData() {
        try {
          const response = await API.get(`/politician/poly/${selectedParty}`);
          setData(response.data);
          setIsLoading(false); // 로딩 완료
        } catch (error) {
          console.error('Error fetching community content:', error);
          setIsLoading(false); // 오류 발생 시 로딩 완료
        }
      }
      fetchData();
    }
  }, [selectedParty]);

  const [origData, setOrigData] = useState([]);
  const [polyData, setPolyData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get(
          `/politician/orig/${markerStates.markerName}`
        );
        if (response.status === 200 && response.data.length > 0) {
          setOrigData(response.data);

          // Assuming the first element contains the tpgCount and cfmtnElcnt
          const regionData = response.data[0];
          setTpgCount(regionData.tpgCount || 0);
          setCfmtnElcnt(regionData.cfmtnElcnt || 0);
        } else {
          console.error('Error fetching data:', response.statusText);
          setOrigData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setOrigData([]);
      }
    }
    fetchData();
  }, [markerStates.markerName]);

  const [userInput, setUserInput] = useState('');
  const [searchName, setSearchName] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const onUserinput = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`politician/name/${searchName}`);

        setPolyData(response.data);

        setMarkerStates((prevMarkerStates) => ({
          ...prevMarkerStates,
          markerName: response.data.ORIG_NM,
          markerPolyName: response.data.HG_NM,
        }));

        setData(response.data);

        setHiddenElements(true);
      } catch (error) {
        console.error('Error fetching community content:', error);
      }
    };

    fetchData(); // fetchData 함수를 바로 실행
  }, [searchName]);

  const [hiddenSearchCards, setHiddenSearchCards] = useState(true); // 초기값은 안보이도록 설정
  const [nameData, setNameData] = useState([]);
  const [showSearchErrorModal, setShowSearchErrorModal] = useState(false);

  // 검색
  const handleSearchClick = async (e) => {
    e.preventDefault();

    try {
      const response = await API.get(`politician/name/${userInput}`);
      setNameData(response.data);

      if (response.data.length > 0) {
        const firstResult = response.data[0];
        const origNm = extractOrigNm(firstResult.ORIG_NM);
        setSelectedMarker(origNm);
      }

      setMarkerStates((prevMarkerStates) => ({
        ...prevMarkerStates,
        markerName: '',
        imgSrc: 'src/assets/images/pin_click.png',
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
      setShowSearchErrorModal(true);
      console.log(showSearchErrorModal);
    }

    setHiddenSearchCards(false);
    setHiddenOrigElement(true);
    setHiddenElements(true);
  };
  const extractOrigNm = (origNm) => {
    const match = origNm.match(/.*?(갑|을)/);
    const extractedString = match ? match[0].replace(/(갑|을)/, '') : origNm;

    return extractedString;
  };

  const handleCloseSearchError = () => {
    setShowSearchErrorModal(false);
  };

  const toggleVoteInfoVisibility = () => {
    setIsVoteInfoVisible(!isVoteInfoVisible);
  };

  const toggleVoteResultVisibility = () => {
    setIsVoteResultVisible(!isVoteResultVisible);
  };

  const [hiddenElements, setHiddenElements] = useState(false); // 초기값은 보이도록 설정
  const [hiddenOrigElement, setHiddenOrigElement] = useState(true); // 초기값은 안보이도록
  const partyVisibility = () => {
    setSelectedParty(!selectedParty);
    setParty(party);
  };

  const handleMarkerClick = async (markerName) => {
    try {
      const response = await API.get(`/politician/orig/${markerName}`);

      // vict_poly 값 동적으로 찾기(api에서 vict_poly가 2 or 3에 위치하므로)
      const victPoly = findVictPoly(response.data);

      setMarkerStates((prevMarkerStates) => ({
        ...prevMarkerStates,
        markerName: markerName,
        imgSrc: 'src/assets/images/pin_click.png',
        victPoly: victPoly,
      }));
      setSelectedMarker(null);

      setHiddenElements(true);
      setHiddenOrigElement(false); // 카드가 보이도록
      setHiddenSearchCards(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // vict_poly를 동적으로 찾는 함수
  const findVictPoly = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i]?.vict_poly !== undefined) {
        return data[i].vict_poly;
      }
    }
    return 0;
  };

  const handleRefreshClick = () => {
    window.location.reload();
  };

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
  ];
  // onSearch={handleSearch}
  return (
    <S.MainWrapper>
      <CommunityTop
        titlesub={'정치에 한 발자국 가까워지는 경험'}
        titleMain={'정치의 중심지, 서울의 \n 국회의원들을 확인해보세요!'}
        style={{ whiteSpace: 'pre-line' }}
      />
      <S.MainContainer>
        <S.SearchWrapper onSubmit={handleSearchClick}>
          <S.SearchInput>
            <S.Input
              type='text'
              placeholder='국회의원 이름을 검색해주세요'
              value={userInput}
              onChange={onUserinput}
            />
          </S.SearchInput>
          <S.SearchButton type='submit'>
            <img src='/src/assets/images/search.svg' alt='Search' />
          </S.SearchButton>
        </S.SearchWrapper>

        <S.Map>
          <S.MapImg src={MapImg} alt='맵 이미지' />
          <S.MapBoxContent onClick={handleRefreshClick}>
            {markerStates.markerName
              ? '새로고침⟲'
              : '핀을 눌러 정보를 확인해보세요!'}
          </S.MapBoxContent>

          <MainMap
            markerName={'은평구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'30px'}
            clickbeforetop={'40px'}
            clickafterleft={'126px'}
            clickbeforeleft={'156px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'강서구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'80px'}
            clickbeforetop={'90px'}
            clickafterleft={'30px'}
            clickbeforeleft={'60px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'광진구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'100px'}
            clickbeforetop={'110px'}
            clickafterleft={'265px'}
            clickbeforeleft={'295px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'노원구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'20px'}
            clickbeforetop={'30px'}
            clickafterleft={'260px'}
            clickbeforeleft={'290px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'용산구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'110px'}
            clickbeforetop={'120px'}
            clickafterleft={'170px'}
            clickbeforeleft={'200px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'동작구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'130px'}
            clickbeforetop={'140px'}
            clickafterleft={'150px'}
            clickbeforeleft={'180px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'영등포구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'120px'}
            clickbeforetop={'130px'}
            clickafterleft={'110px'}
            clickbeforeleft={'140px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'서대문구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'80px'}
            clickbeforetop={'80px'}
            clickafterleft={'30px'}
            clickbeforeleft={'170px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'송파구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'80px'}
            clickbeforetop={'150px'}
            clickafterleft={'30px'}
            clickbeforeleft={'320px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'마포구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'80px'}
            clickbeforetop={'90px'}
            clickafterleft={'110px'}
            clickbeforeleft={'140px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'중구성동구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'90px'}
            clickbeforetop={'100px'}
            clickafterleft={'210px'}
            clickbeforeleft={'240px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'서초구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'160px'}
            clickbeforetop={'170px'}
            clickafterleft={'200px'}
            clickbeforeleft={'230px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'강북구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'20px'}
            clickbeforetop={'30px'}
            clickafterleft={'200px'}
            clickbeforeleft={'230px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'강남구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'140px'}
            clickbeforetop={'150px'}
            clickafterleft={'240px'}
            clickbeforeleft={'270px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'중랑구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'60px'}
            clickbeforetop={'70px'}
            clickafterleft={'270px'}
            clickbeforeleft={'300px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'동대문구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'70px'}
            clickbeforetop={'80px'}
            clickafterleft={'240px'}
            clickbeforeleft={'270px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'도봉구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'5px'}
            clickbeforetop={'10px'}
            clickafterleft={'220px'}
            clickbeforeleft={'250px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'관악구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'170px'}
            clickbeforetop={'180px'}
            clickafterleft={'150px'}
            clickbeforeleft={'180px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'양천구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'120px'}
            clickbeforetop={'130px'}
            clickafterleft={'60px'}
            clickbeforeleft={'90px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'구로구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'150px'}
            clickbeforetop={'160px'}
            clickafterleft={'60px'}
            clickbeforeleft={'90px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'강동구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'100px'}
            clickbeforetop={'110px'}
            clickafterleft={'310px'}
            clickbeforeleft={'340px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'금천구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'170px'}
            clickbeforetop={'180px'}
            clickafterleft={'110px'}
            clickbeforeleft={'140px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'종로구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'40px'}
            clickbeforetop={'50px'}
            clickafterleft={'170px'}
            clickbeforeleft={'200px'}
            selectedMarker={selectedMarker}
          />
          <MainMap
            markerName={'성북구'}
            markerStates={markerStates}
            handleMarkerClick={handleMarkerClick}
            clickaftertop={'50px'}
            clickbeforetop={'60px'}
            clickafterleft={'200px'}
            clickbeforeleft={'230px'}
            selectedMarker={selectedMarker}
          />
        </S.Map>

        {!hiddenElements && (
          <>
            <S.Border />
            <MainSubTitle
              title={dummyData2[region].title}
              onClick={toggleVoteInfoVisibility}
              style={{ display: 'flex' }}
            />
            {isVoteInfoVisible && (
              <div>
                <S.MainVoteInfoContainer>
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
              style={{ display: hiddenElements ? 'none' : 'flex' }}
            />
            {isVoteResultVisible && (
              <MainVoteResult
                party1={dummyData2[region].더불어민주당}
                party2={dummyData2[region].국민의힘}
              />
            )}

            <S.Border />
            <SubTitle>
              아래 각 당을 선택하여 <br></br>
              당선된 국회의원들을 확인해보세요
            </SubTitle>

            <S.MainSelectBtnContainer>
              <MainSelectBtn
                polyName='더불어민주당'
                onClick={() => PolipartyVisibility('더불어민주당')}
                isActive={selectedParty === '더불어민주당'}
              />
              <MainSelectBtn
                polyName='국민의힘'
                onClick={() => PolipartyVisibility('국민의힘')}
                isActive={selectedParty === '국민의힘'}
              />
            </S.MainSelectBtnContainer>
          </>
        )}

        {isLoading ? (
          <S.Loading>
            잠시만 기다려주세요! <br />
            정보를 열심히 불러오고 있어요 :)
          </S.Loading>
        ) : (
          <S.Cards style={{ display: hiddenElements ? 'none' : 'grid' }}>
            {data.length > 0 ? (
              data.map((content) => (
                <Link to={`/politician/id/${content.MONA_CD}`}>
                  <MainCard
                    jpg_link={content.jpg_link}
                    POLY_NM={content.POLY_NM}
                    HG_NM={content.HG_NM}
                    ENG_NM={content.ENG_NM}
                    ORIG_NM={content.ORIG_NM}
                    HOMEPAGE={content.HOMEPAGE}
                    MONA_CD={content.MONA_CD}
                  />
                </Link>
              ))
            ) : (
              <div></div> // 데이터가 없을 때 표시될 메시지
            )}
          </S.Cards>
        )}

        <S.selectOrigWrapper
          style={{ display: hiddenOrigElement ? 'none' : 'block' }}
        >
          <S.SelectOrigTitle>
            현재 선택된 구는 {markerStates.markerName}입니다
          </S.SelectOrigTitle>
          <S.SelectOrigSubTitle>
            "{markerStates.markerName}"는 투표구수가 {tpgCount}개, 선거인수가{' '}
            {cfmtnElcnt}명 존재합니다.
          </S.SelectOrigSubTitle>

          <S.Cards style={{ display: hiddenElements ? 'grid' : 'none' }}>
            {origData
              .filter((content) => content.HG_NM) // 'HG_NM' 키를 가진 객체만 처리
              .map((content) => (
                <Link to={`/politician/id/${content.MONA_CD}`}>
                  <MainCard
                    jpg_link={content.jpg_link}
                    POLY_NM={content.POLY_NM}
                    HG_NM={content.HG_NM}
                    ENG_NM={content.ENG_NM}
                    ORIG_NM={content.ORIG_NM}
                    HOMEPAGE={content.HOMEPAGE}
                    MONA_CD={content.MONA_CD}
                  />
                </Link>
              ))}
          </S.Cards>
        </S.selectOrigWrapper>
        <S.Cards
          style={{
            display: hiddenElements && polyData.length > 0 ? 'grid' : 'none',
          }}
        >
          {polyData.length > 0 &&
            polyData.map((content) => (
              <Link to={`/politician/id/${content.MONA_CD}`}>
                <MainCard
                  jpg_link={content.jpg_link}
                  POLY_NM={content.POLY_NM}
                  HG_NM={content.HG_NM}
                  ENG_NM={content.ENG_NM}
                  ORIG_NM={content.ORIG_NM}
                  HOMEPAGE={content.HOMEPAGE}
                  MONA_CD={content.MONA_CD}
                />
              </Link>
            ))}
        </S.Cards>
        <S.searchNameWrapper
          style={{ display: hiddenSearchCards ? 'none' : 'block' }}
        >
          <S.SelectOrigTitle>
            현재 선택된 구는 {selectedMarker}입니다
          </S.SelectOrigTitle>
          <S.SelectOrigSubTitle>
            "{markerStates.markerName}"는 투표구수가 71개, 선거인수가 262,308명
            존재합니다
          </S.SelectOrigSubTitle>

          <S.Cards style={{ display: hiddenSearchCards ? 'none' : 'grid' }}>
            {nameData.length > 0 ? (
              nameData.map((content) => (
                <Link to={`/politician/id/${content.MONA_CD}`}>
                  <MainCard
                    jpg_link={content.jpg_link}
                    POLY_NM={content.POLY_NM}
                    HG_NM={content.HG_NM}
                    ENG_NM={content.ENG_NM}
                    ORIG_NM={content.ORIG_NM}
                    HOMEPAGE={content.HOMEPAGE}
                    MONA_CD={content.MONA_CD}
                  />
                </Link>
              ))
            ) : (
              <div>
                {showSearchErrorModal && (
                  <MainSearchError onClose={handleCloseSearchError} />
                )}
              </div>
            )}
          </S.Cards>
        </S.searchNameWrapper>
      </S.MainContainer>
    </S.MainWrapper>
  );
}

export default PMain;
