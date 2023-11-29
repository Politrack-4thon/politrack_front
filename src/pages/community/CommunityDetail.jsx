import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import CommunityTop from '../../components/Community/CommunityTop';
import CommunityDetailBg from '../../components/Community/CommunityDetailBg';
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
  const [selectedVote, setSelectedVote] = useState(''); // 또는 useState('')
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false); // 제출 여부 추적

  // useEffect(() => {
  //   console.log('Selected Vote changed to:', selectedVote);
  // }, [selectedVote]);

  // useEffect(() => {
  //   console.log(`의견작성폼: ${comment}`);
  // }, [comment]);

  // useEffect(() => {
  //   console.log(`투표임: ${selectedVote}`);
  // }, [selectedVote]);

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
          const matchedDetail = detailResponse.data.find(
            (item) => item.community_id === parseInt(community_id)
          );
          if (matchedDetail) {
            setDetailData(matchedDetail);
          } else {
            console.error('일치하는 데이터가 없음');
            // 여기에서 사용자에게 알리거나 다른 조치를 취할 수 있습니다.
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

  const handleFormSubmit = () => {
    if (!selectedVote) {
      alert('투표를 먼저 선택해주세요.');
      return;
    }
    setHasSubmitted(true);
    setShowModal(true); // 모달 표시
    localStorage.setItem(`submitted-${community_id}`, 'true');

    const voteMapping = {
      '좋은 것 같아!': 'option1',
      '난 별로...': 'option2',
      '잘 모르겠어': 'option3',
    };

    // 투표 선택과 의견을 함께 전송
    const postData = {
      comment: comment,
      community_id: community_id,
      pick: voteMapping[selectedVote] || selectedVote, // 변환된 값을 사용
    };

    API.post('/politician/communitydetail/', postData)
      .then((response) => {
        // console.log('투표, 댓글이 성공적으로 제출되었습니다.', response.data);
        alert('제출되었습니다 :)');
        setIsModalOpen(true);
      })
      .catch((error) => {
        // console.error('댓글 제출 중 오류가 발생했습니다.', error);
      });
  };

  const isButtonActive = selectedVote !== '';

  useEffect(() => {
    // 컴포넌트가 마운트될 때 토큰을 확인
    const checkSubmissionStatus = () => {
      // 여기서 토큰 확인 로직을 구현하거나 API 호출을 수행
      const submitted = localStorage.getItem(`submitted-${community_id}`);
      if (submitted === 'true') {
        setHasSubmitted(true);
        setIsModalOpen(true); // 이미 제출한 경우 모달을 열어둔다
      }
    };

    checkSubmissionStatus();
  }, [community_id]);

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
      {communityData && (
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
      )}
      {!hasDeadlinePassed() && isContentVisible && (
        <S.ComDetailOpinion>
          <CommunityQuestion
            subQuestion={'어떻게 생각하나요?'}
            mainQuestion={'여러분의 의견을 남겨주세요.'}
          />
          <ComDetailQuiz
            comDetailTitle={communityData.title}
            comDetailDate={formattedDate}
            community_id={community_id}
            selectedVote={selectedVote}
            setSelectedVote={setSelectedVote}
            disabled={isModalOpen}
            showModal={isModalOpen}
          />
          <CommunityQuestion mainQuestion={'자유롭게 의견을 적어주세요.'} />
          <ComDetailForm
            comment={comment}
            community={detailData?.community}
            selectedVote={selectedVote}
            setSelectedVote={setSelectedVote}
            setComment={setComment}
            disabled={isModalOpen}
            showModal={isModalOpen}
          />

          <S.FormWrapper>
            <S.FormBtn
              onClick={handleFormSubmit}
              disabled={!isButtonActive || hasSubmitted}
              style={{
                backgroundColor: isButtonActive ? '#484A64' : '#EBEDF8',
                color: isButtonActive ? 'white' : '#C0C5DC',
              }}
            >
              작성 완료
            </S.FormBtn>
          </S.FormWrapper>
        </S.ComDetailOpinion>
      )}
    </S.CommunityDetailWrapper>
  );
}

export default CommunityDetail;
