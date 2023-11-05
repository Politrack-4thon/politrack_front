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

  const dummyData = [
    {
      id: 1,
      title: '윈윈이야!',
      text: '국민의힘 소속인 김병수 김포시장이 김기현 국민의힘 대표에게 “김포시 서울 편입 검토해줘” 라고 건의했어요.',
      id1: '윈윈이야!',
      id1Des:
        '김포시는 출퇴근 인구의 85%가 서울에 일자리가 있어서 먼저 진행하겠다고 했으며, 공항과 바다 가까이에 있는 김포가 서울이 되면 강서권이 발달하고 해외 무역·관광 등의 자원을 얻을 수 있다고 했어요.',
      id2: '김포시의 계산, 경기북도 싫어',
      id2Des:
        '얼마 전 경기도는 한강 위쪽 10개 시군을 묶어 경기북도로 분리하기로 했어요. 그러나 위치상 한강 아래쪽인 데다 김포시 반응도 뜨뜻미지근하자 김포시는 빼기로 했어요. 김포시가 “우리는 서울시에 넣는게 맞아.” 라고 하기도 했고요.',
      id3: '국힘의 계산, ‘메트로폴리탄 서울’',
      id3Des:
        '이번 발표는 수도권을 겨냥한 국힘의 내년 총선 전략이라는 분석이 나와요. 김포시는 수도권에서도 표심이 왔다 갔다 하는 ‘스윙보트’ 지역이니“서울이랑 합칠게” 하면 표심을 꽉 잡을 수 있지 않겠냐는 것. 구리·광명·하남시 등 주변 지역 민심에도 영향을 줄 수 있고요. ',
    },
  ];

  return (
    <S.DetailBgWrapper>
      <S.DetailWallpaper>
        <S.DetailTitle>
          {(communityContents.length > 0 ? communityContents : dummyData).map(
            (content) => (
              <ComDetailTitle
                key={content.id}
                title={content.title}
                text={content.text}
              />
            )
          )}
        </S.DetailTitle>
        {(communityContents.length > 0 ? communityContents : dummyData).map(
          (content) => {
            const ideaCards = [];
            for (let i = 1; content[`id${i}`]; i++) {
              ideaCards.push(
                <ComDetailCard
                  key={`${content.id}-idea-${i}`}
                  idea={content[`id${i}`]}
                  ideaDes={content[`id${i}Des`]}
                />
              );
            }
            return ideaCards;
          }
        )}
      </S.DetailWallpaper>
    </S.DetailBgWrapper>
  );
}

export default CommunityDetailBg;
