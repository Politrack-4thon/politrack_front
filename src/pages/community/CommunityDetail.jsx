import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import CommunityTop from '../../components/Community/CommunityTop';
import CommunityDetailBg from '../../components/Community/CommunityDetailBg';
import ComDetailCard from '../../components/CommunityDetail/ComDetailCard';
import { API } from '../../api/axois'; // 백엔드 API 모듈 import
import CommunityQuestion from '../../components/Community/CommunityQuestion';
import ComDetailQuiz from '../../components/Community/ComDetailQuiz';
import ComDetailForm from '../../components/Community/ComDetailForm';

function CommunityDetail() {
  const [communityData, setCommunityData] = useState(null);
  const [isQuestionResultClickable, setIsQuestionResultClickable] =
    useState(true);

  const questionResultStyle = {
    color: isQuestionResultClickable ? 'white' : '#C0C5DC',
    backgroundColor: isQuestionResultClickable ? '#484A64' : ' #F6F7FE',
    cursor: isQuestionResultClickable ? 'pointer' : 'default',
  };

  const navigate = useNavigate();

  //임시
  const [deadline, setDeadline] = useState({
    isExpired: false,
    date: '2023-12-31',
  });

  useEffect(() => {
    const currentDate = new Date();
    const deadlineDate = new Date(deadline.date);

    if (deadlineDate < currentDate) {
      setDeadline({ ...deadline, isExpired: true });
      setIsQuestionResultClickable(true); // 기한이 지났으면 버튼 활성화
    }
  }, [deadline.isExpired]);

  useEffect(() => {
    async function fetchData() {
      try {
        // 기한 정보를 가져오는 백엔드 API 엔드포인트 호출
        const deadlineResponse = await API.get('YOUR_DEADLINE_API_ENDPOINT');

        if (deadlineResponse.status === 200) {
          const deadlineData = deadlineResponse.data;
          setDeadline(deadlineData); // 기한 상태로 설정
        } else {
          console.error(
            'Error fetching deadline:',
            deadlineResponse.statusText
          );
        }

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
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

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
              //이동 링크 변화 필요
              navigate('/ComResult');
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
