import React, { useEffect, useState } from 'react';
import * as S from './style';
import { API } from '../../api/axois';
import { useNavigate } from 'react-router-dom';
import CommunityTop from '../../components/Community/CommunityTop';
import CommunityQuestion from '../../components/Community/CommunityQuestion';
import CommunityContent from '../../components/Community/CommunityContent';

function Community() {
  const [communityContents, setCommunityContents] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  async function fetchData() {
    try {
      const response = await API.get('/politician/community/');

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
  }

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
        {communityContents.map((content) => (
          <CommunityContent
            key={content.id}
            title={content.title}
            status={content.isVotingInProgress ? '투표진행중' : '투표마감'}
            content={content.content}
          />
        ))}
      </S.ContentContainer>
    </S.CommunityWrapper>
  );
}

export default Community;
