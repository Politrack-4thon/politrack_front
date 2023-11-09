import React, { useEffect, useState } from 'react';
import * as S from './style';
import { API } from '../../api/axois';
import { useNavigate } from 'react-router-dom'; // react-router-dom의 useNavigate 불러오기
import CommunityTop from '../../components/Community/CommunityTop';
import CommunityQuestion from '../../components/Community/CommunityQuestion';
import CommunityContent from '../../components/Community/CommunityContent';

function Community() {
  const [communityContents, setCommunityContents] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 여기에서 로그인 여부를 확인하고 상태를 업데이트합니다.
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      // 로그인하지 않은 상태면 다른 페이지로 이동
      navigate('/signin');
    }
  }, [navigate]);

  useEffect(() => {
    if (isLoggedIn) {
      // 로그인한 상태에서만 데이터를 가져오도록 처리
      fetchData();
    }
  }, [isLoggedIn]);

  async function fetchData() {
    try {
      const response = await API.get('/politician/community/');

      if (response.status === 200) {
        const data = response.data;

        // 커뮤니티 리스트를 'id' 역순으로 정렬
        const sortedCommunityContents = data.sort(
          (a, b) => b.community_id - a.community_id
        );
        setCommunityContents(sortedCommunityContents);
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
            content={content.content}
          />
        ))}
      </S.ContentContainer>
    </S.CommunityWrapper>
  );
}

export default Community;
