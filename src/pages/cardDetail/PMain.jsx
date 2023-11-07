import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import * as S from './style';
import CommunityTop from '../../components/Community/CommunityTop';
import MainMap from '../../components/Main/MainMap';
import MainSubTitle from '../../components/Main/MainSubTitle';
import MainSearch from '../../components/Main/MainSearch';
import MainVoteInfo from '../../components/Main/MainVoteInfo';
import MainVoteResult from '../../components/Main/MainVoteResult';
import MainSelectBtn from '../../components/Main/MainSelectBtn';
import MainCard from '../../components/Main/MainCard';


import {MainCardName, SubTitle} from '../../components/Main/style';
function PMain() {
  let region = 0;

  const dummyData = [ // 지역별
    {
      id:1,
      title: '대한민국 정치의 중심지, 서울',
      constituency: '49개',
      votingPre:'2.25개',
      voter: '8,477.244명',
      더불어민주당: '41개',
      국민의힘: '8개',
    },
    {
      id:2,
      title: '대한민국 정치의 중심지, 서울',
      constituency: '49개',
      votingPre:'2.25개',
      voter: '8,477.244명',
    }
  ]

  const dummyData2 = [ // 정치인
    {
      id: 1, name:'홍익표', partyName:'더불어민주당', district:'구'
    },
    {
      id: 2, name:'ddd', partyName:'dddd', district:'구'
    },

  ]
  const [isVoteInfoVisible, setIsVoteInfoVisible] = useState(true);
  const [isVoteResultVisible, setIsVoteResultVisible] = useState(true);

  const toggleVoteInfoVisibility = () => {
    setIsVoteInfoVisible(!isVoteInfoVisible);
  };

  const toggleVoteResultVisibility = () => {
    setIsVoteResultVisible(!isVoteResultVisible);
  }

  return (
    <S.MainWrapper>
      <CommunityTop
        titlesub={'정치에 한 발자국 가까워지는 경험'}
        titleMain={'정치의 중심지, 서울의 \n 국회의원들을 확인해보세요!'}
        style={{ whiteSpace: 'pre-line' }}
      />
      <S.MainContainer>
        <MainSearch/>
        <MainMap/>
 
        <S.Border/>

        <MainSubTitle 
        title={dummyData[region].title}
        onClick={toggleVoteInfoVisibility}
        />

        {isVoteInfoVisible && (
        <div>
          
            <S.MainVoteInfoContainer>
              <>
                <MainVoteInfo
                  icon="src/assets/images/icon1.svg"
                  title="선거구 수"
                  value={dummyData[region].constituency}
                />
                <MainVoteInfo
                  icon="src/assets/images/icon2.png"
                  title="투표구 수"
                  value={dummyData[region].votingPre}
                />
                <MainVoteInfo
                  icon="src/assets/images/icon3.svg"
                  title="선거인 수"
                  value={dummyData[region].voter}
                />
              </>
            
          </S.MainVoteInfoContainer>
          <S.TextElectionCriteria>&#40;제 21대 국회의원 선거 기준&#41; </S.TextElectionCriteria>
        </div>
        )}

        <S.Border/>

        <MainSubTitle 
        title='제 21대 국회의원 선거 결과'
        onClick={toggleVoteResultVisibility}
        />
        {isVoteResultVisible && (
        <MainVoteResult
        party1={dummyData[region].더불어민주당}
        party2={dummyData[region].국민의힘}
        />
        )};
        <S.Border/>

        <SubTitle>아래 각 당을 선택하여 <br></br>
        당선된 국회의원들을 확인해보세요</SubTitle>
        <MainSelectBtn/>

        <S.Cards>
            {dummyData2.map((data) => (
              <MainCard key={data.id} name={data.name} partyName={data.partyName} district={data.district} />
            ))}
        </S.Cards>      
      </S.MainContainer>
    </S.MainWrapper>
  );
}

export default PMain;