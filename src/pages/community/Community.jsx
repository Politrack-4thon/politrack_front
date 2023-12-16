import React, { useCallback, useEffect, useState } from 'react';
import * as S from './style';
import { API } from '../../api/axois';
import { useNavigate } from 'react-router-dom';
import CommunityTop from '../../components/Community/CommunityTop';
import CommunityQuestion from '../../components/Community/CommunityQuestion';
import CommunityContent from '../../components/Community/CommunityContent';
import ComCategory from '../../components/Community/ComCategory';


function Community() {
  const [communityContents, setCommunityContents] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 기본 카테고리 state 선언
  const [category, setCategory] = useState(' ')
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback(Category => setCategory(Category), [])
  
  const fetchData = async () => {
    try {
      const response = await API.get(`/politician/community/?category=${category}`);

      if (response.status === 200) {
        const data = response.data;

        // 커뮤니티 리스트를 'id' 역순으로 정렬
        const sortedCommunityContents = data.sort(
          (a, b) => b.community_id - a.community_id
        );

        // 현재 시간을 가져오는 함수
        const getCurrentTime = () => new Date();

        // content의 마감 시간과 현재 시간 비교
        const updatedContents = sortedCommunityContents.map((content) => {
          const deadline = new Date(content.formatted_deadline);

          // 투표 진행 중 여부 확인
          const isVotingInProgress = deadline > getCurrentTime();

          return {
            ...content,
            isVotingInProgress,
          };
        });

        setCommunityContents(updatedContents);
      } else {
        console.error('Error fetching community content:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching community content:', error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      // 로그인하지 않은 상태면 경고 메시지 표시
      alert('로그인이 필요한 페이지입니다.');
      navigate('/signin');
    }
  }, [navigate]);

  // 로그인 상태가 변경되면 fetchData 함수를 호출
  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn, fetchData]); // fetchData를 의존성 배열에 추가

  // category 상태가 변경되면 fetchData 함수를 호출
  useEffect(() => {
    fetchData();
  }, [category]); // category를 의존성 배열에 추가
  

  const minContentHeight = 'calc(100vh - 450px)';

  return (
    <S.CommunityWrapper>
      <CommunityTop
        titlesub={'발전하는 우리나라를 만들어 나가기 위한 첫걸음'}
        titleMain={'어려운 정치이슈, \n 폴리트랙에서 이야기 해봐요!'}
        style={{ whiteSpace: 'pre-line' }}
      />
      <CommunityQuestion
        subQuestion={'오늘의 쟁점은 무엇일까요?'}
        mainQuestion={'오늘의 쟁점을 확인해보세요.'}
      />
      <S.ContentContainer style={{ minHeight: minContentHeight }}>
       <ComCategory category={category} onSelect = {onSelect}/>


        {communityContents.map((content) => (
          <CommunityContent
            key={content.community_id}
            id={content.community_id} // community_id를 id prop으로 전달
            title={content.title}
            status={content.isVotingInProgress ? '투표진행중' : '투표마감'}
            content={
              content.content.slice(0, 120) +
              (content.content.length > 120 ? '...' : '')
            } // 100자로 제한하고, 넘으면 '...' 추가
          />
        ))}
      </S.ContentContainer>
    </S.CommunityWrapper>
  );
}

export default Community;
