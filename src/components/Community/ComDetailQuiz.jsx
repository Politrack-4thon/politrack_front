import React, { useState, useEffect } from 'react';
import { API } from '../../api/axois';
import * as S from '../Community/style';
import VoteModal from './VoteModal';

function ComDetailQuiz({ comDetailTitle, comDetailDate, community_id }) {
  const [selectedVote, setSelectedVote] = useState(null);
  const [isVoteModalOpen, setVoteModalOpen] = useState(false);
  const [isVoteCompleted, setIsVoteCompleted] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const deadline = new Date(comDetailDate);
    if (deadline < new Date()) {
      setIsExpired(true);
    }
  }, [comDetailDate]);

  if (isExpired) return null;

  const handleVoteSelection = (voteOption) => {
    setSelectedVote(voteOption);
  };

  const handleVoteSubmission = () => {
    if (!selectedVote) {
      console.error('투표할 항목을 선택해주세요.');
      return;
    }

    let votePayload;
    switch (selectedVote) {
      case '좋은 것 같아!':
        votePayload = { pick: 'Option 1' };
        break;
      case '난 별로...':
        votePayload = { pick: 'Option 2' };
        break;
      case '잘 모르겠어':
        votePayload = { pick: 'Option 3' };
        break;
      default:
        console.error('알 수 없는 투표 옵션입니다.');
        return;
    }

    API.post(`/politician/community/${community_id}/detail/`, votePayload, {})
      .then((response) => {
        console.log('투표 성공:', response.data);
        setIsVoteCompleted(true);
      })
      .catch((error) => {
        console.error('투표 실패:', error);
      });
  };

  const handleConfirm = () => {
    setVoteModalOpen(false);
    if (selectedVote !== null) {
      // Optional: Add logic here to handle post-vote actions
    }
  };

  return (
    <S.DetailQuizWrapper>
      <S.DetailQuizWallpaper>
        <S.Vote className={selectedVote ? 'selected' : ''}>
          {/* <S.VoteText
            selected={selectedVote}
            onClick={handleVoteSubmission} // '투표하기' 버튼에 handleVoteSubmission 함수 연결
          >
            {isVoteCompleted ? '재투표' : '투표하기'}
          </S.VoteText> */}
        </S.Vote>
        {isVoteModalOpen && (
          <VoteModal isOpen={isVoteModalOpen} onClose={handleConfirm} />
        )}
        <S.DetailQuizTitle style={{ whiteSpace: 'pre-line' }}>
          {comDetailTitle}
        </S.DetailQuizTitle>
        <S.VoteContainer>
          <S.VoteContent
            onClick={() => handleVoteSelection('좋은 것 같아!')}
            className={`${selectedVote === '좋은 것 같아!' ? 'selected' : ''} ${
              selectedVote === '좋은 것 같아!' ? 'selected-background' : ''
            }`}
          >
            좋은 것 같아!{' '}
            {selectedVote === '좋은 것 같아!' ? (
              <S.VoteIcon />
            ) : (
              <S.CircleIcon />
            )}
          </S.VoteContent>
          <S.VoteContent
            onClick={() => handleVoteSelection('난 별로...')}
            className={`${selectedVote === '난 별로...' ? 'selected' : ''} ${
              selectedVote === '난 별로...' ? 'selected-background' : ''
            }`}
          >
            난 별로...{' '}
            {selectedVote === '난 별로...' ? <S.VoteIcon /> : <S.CircleIcon />}
          </S.VoteContent>
          <S.VoteContent
            onClick={() => handleVoteSelection('잘 모르겠어')}
            className={`${selectedVote === '잘 모르겠어' ? 'selected' : ''} ${
              selectedVote === '잘 모르겠어' ? 'selected-background' : ''
            }`}
          >
            잘 모르겠어{' '}
            {selectedVote === '잘 모르겠어' ? <S.VoteIcon /> : <S.CircleIcon />}
          </S.VoteContent>
        </S.VoteContainer>
        <S.ComDetailDate>{comDetailDate}</S.ComDetailDate>
      </S.DetailQuizWallpaper>
    </S.DetailQuizWrapper>
  );
}

export default ComDetailQuiz;
