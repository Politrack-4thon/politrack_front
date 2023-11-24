import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import CommunityTop from '../../components/Community/CommunityTop';
import CommunityDetailBg from '../../components/Community/CommunityDetailBg';
import ComDetailCard from '../../components/CommunityDetail/ComDetailCard';
import { API } from '../../api/axois';
import CommunityQuestion from '../../components/Community/CommunityQuestion';
import ComDetailQuiz from '../../components/Community/ComDetailQuiz';
import ComDetailForm from '../../components/Community/ComDetailForm';

function CommunityDetail() {
  const [communityData, setCommunityData] = useState('');
  const [detailData, setDetailData] = useState('');
  const { community_id } = useParams();
  const navigate = useNavigate();
  const formattedDate = `${communityData.formatted_created_at} ~ ${communityData.formatted_deadline}`;
  const [comment, setComment] = useState(''); // comment 상태 관리

  // 커뮤니티 상세 정보 가져오기
  useEffect(() => {
    async function fetchCommunityData() {
      try {
        const response = await API.get(`/politician/community`);
        if (response.status === 200) {
          const data = response.data.find(
            (item) => item.community_id === parseInt(community_id)
          );
          setCommunityData(data);
        } else {
          console.error('Error fetching community data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching community data:', error);
      }
    }

    fetchCommunityData();
  }, [community_id]);

  useEffect(() => {
    async function fetchDetailData() {
      try {
        const detailResponse = await API.get(
          `/politician/community/${community_id}/detail/`
        );
        if (detailResponse.status === 200 && detailResponse.data) {
          // `board_id`가 `community_id`와 일치하는 첫 번째 객체를 찾는다
          const matchedDetail = detailResponse.data.find(
            (item) => item.board_id === parseInt(community_id)
          );
          if (matchedDetail) {
            setDetailData(matchedDetail);
          } else {
            console.error('일치하는 데이터가 없음');
            // 여기에 추가적인 에러 처리 로직을 추가할 수 있음
          }
        } else {
          console.error(
            '디테일 데이터 가져오기 오류:',
            detailResponse.statusText
          );
        }
      } catch (error) {
        console.error('디테일 데이터 가져오기 오류:', error);
      }
    }
    fetchDetailData();
  }, [community_id]);

  const isContentVisible =
    new Date(communityData.formatted_deadline) > new Date();

  const hasDeadlinePassed = () => {
    const deadline = new Date(communityData.formatted_deadline);
    return new Date() > deadline;
  };

  return (
    <S.CommunityDetailWrapper>
      <CommunityTop
        titlesub={'발전하는 우리나라를 만들어 나가기 위한 첫걸음'}
        titleMain={'어려운 정치이슈, \n 폴리트랙에서 이야기 해봐요!'}
        style={{ whiteSpace: 'pre-line' }}
      />

      <S.ComDetailVoteContainer>
        <CommunityQuestion
          subQuestion={'오늘의 쟁점은 무엇일까요?'}
          mainQuestion={'오늘의 쟁점을 확인해보세요.'}
        />

        <S.QuestionResult
          onClick={() => {
            if (hasDeadlinePassed()) {
              navigate(`/ComResult/${community_id}`);
            }
          }}
          isPastDeadline={hasDeadlinePassed()}
        >
          투표결과 확인하기
        </S.QuestionResult>
      </S.ComDetailVoteContainer>
      {communityData && detailData && (
        <>
          <CommunityDetailBg
            formattedDate={formattedDate}
            comDetailTitle={communityData.title}
            comDetailText={communityData.content}
            comDetailA={detailData.idea_a}
            comDetailB={detailData.idea_b}
            comDetailC={detailData.idea_c}
            comDetailADes={detailData.idea_a_des}
            comDetailBDes={detailData.idea_b_des}
            comDetailCDes={detailData.idea_c_des}
          />
        </>
      )}
      {isContentVisible && (
        <S.ComDetailOpinion>
          <CommunityQuestion
            subQuestion={'어떻게 생각하나요?'}
            mainQuestion={'여러분의 의견을 남겨주세요.'}
          />
          <ComDetailQuiz
            comDetailTitle={communityData.title}
            comDetailDate={formattedDate}
            community_id={community_id}
          />
          <CommunityQuestion mainQuestion={'자유롭게 의견을 적어주세요.'} />
          <ComDetailForm
            comment={comment}
            setComment={setComment}
            community={detailData?.community}
          />
        </S.ComDetailOpinion>
      )}
    </S.CommunityDetailWrapper>
  );
}

export default CommunityDetail;
