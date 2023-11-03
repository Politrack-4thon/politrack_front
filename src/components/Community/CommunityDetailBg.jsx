import React, { useEffect, useState } from 'react';
import * as S from '../Community/style';
import CommunityContent from './CommunityContent';
import ComDetailTitle from '../CommunityDetail/ComDetailTitle';
import ComDetailCard from '../CommunityDetail/ComDetailCard';

function CommunityDetailBg() {
  const [communityContents, setCommunityContents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get('YOUR_API_ENDPOINT');

        if (response.status === 200) {
          const data = response.data;
          setCommunityContents(data);
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

  // 더미 데이터
  const dummyData = [
    {
      id: 1,
      title: '국민의 힘, 김포시 서울시로 편입 추진',
      text: '국민의힘 소속인 김병수 김포시장이 김기현 국민의힘 대표에게 “김포시 서울 편입 검토해줘” 라고 건의했어요.',
    },
  ];

  return (
    <S.DetailBgWrapper>
      <S.DetailWallpaper>
        <S.DetailTitle>
          {(communityContents.length > 0 ? communityContents : dummyData).map(
            (content) => (
              <ComDetailTitle
                id={content.id}
                title={content.title}
                text={content.text}
              />
            )
          )}
        </S.DetailTitle>
        <ComDetailCard />
      </S.DetailWallpaper>
    </S.DetailBgWrapper>
  );
}

export default CommunityDetailBg;
