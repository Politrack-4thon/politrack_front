import React, { useEffect, useState } from 'react';
import * as S from './style';
import CommunityTop from '../../components/Community/CommunityTop';
import CommunityQuestion from '../../components/Community/CommunityQuestion';
import CommunityDetailBg from '../../components/Community/CommunityDetailBg';
import ComDetailCard from '../../components/CommunityDetail/ComDetailCard';
import { API } from '../../api/axois';

function CommunityDetail() {
  const [communityData, setCommunityData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // API 엔드포인트를 여기에 넣어주세요.
        const response = await API.get('YOUR_API_ENDPOINT');

        if (response.status === 200) {
          const data = response.data;
          setCommunityData(data);
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
  }, []);

  return (
    <S.CommunityDetailWrapper>
      <CommunityTop />
      <CommunityQuestion
        subQuestion={'오늘의 쟁점은 무엇일까요?'}
        mainQuestion={'오늘의 쟁점을 확인해보세요.'}
      />
      <CommunityDetailBg />

      {communityData && (
        <ComDetailCard
          title={communityData.title}
          content={communityData.content}
        />
      )}
    </S.CommunityDetailWrapper>
  );
}

export default CommunityDetail;
