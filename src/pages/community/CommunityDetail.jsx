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
  const [communityData, setCommunityData] = useState(null);
  const [isQuestionResultClickable, setIsQuestionResultClickable] =
    useState(true);
  const { community_id, board_id } = useParams() || {
    community_id: '',
    board_id: '',
  };

  const questionResultStyle = {
    color: isQuestionResultClickable ? 'white' : '#C0C5DC',
    backgroundColor: isQuestionResultClickable ? '#484A64' : ' #F6F7FE',
    cursor: isQuestionResultClickable ? 'pointer' : 'default',
  };

  const navigate = useNavigate();

  const [deadline, setDeadline] = useState({
    isExpired: false,
    date: '2023-12-31',
  });

  useEffect(() => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline.date);

    if (deadlineDate < currentDate) {
      setDeadline({ ...deadline, isExpired: true });
      setIsQuestionResultClickable(true);
    }
  }, [deadline.isExpired]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get(
          `/politician/community/${community_id}/`
        );

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
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [community_id, board_id]);

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
          style={questionResultStyle}
          onClick={() => {
            if (isQuestionResultClickable) {
              // 커뮤니티 디테일 페이지로 이동하도록 변경
              navigate(`/ComResult/${community_id}`);
            }
          }}
        >
          투표결과 확인하기
        </S.QuestionResult>
      </S.ComDetailVoteContainer>

      <CommunityDetailBg />
      {deadline.isExpired ? (
        <div></div>
      ) : (
        <S.ComDetailOpinion>
          <CommunityQuestion
            subQuestion={'어떻게 생각하나요?'}
            mainQuestion={'여러분의 의견을 남겨주세요.'}
          />
          <ComDetailQuiz />
          <CommunityQuestion mainQuestion={'자유롭게 의견을 적어주세요.'} />
          <ComDetailForm />
        </S.ComDetailOpinion>
      )}
    </S.CommunityDetailWrapper>
  );
}

export default CommunityDetail;
