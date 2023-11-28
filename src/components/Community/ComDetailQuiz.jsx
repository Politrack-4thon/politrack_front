import React, { useState, useEffect } from 'react';
import { API } from '../../api/axois';
import * as S from '../Community/style';

function ComDetailQuiz({
  comDetailTitle,
  comDetailDate,
  setSelectedVote,
  selectedVote,
  disabled,
  ...props
}) {
  const [isExpired, setIsExpired] = useState(false);
  const voteMapping = {
    '좋은 것 같아!': 'option1',
    '난 별로...': 'option2',
    '잘 모르겠어': 'option3',
  };

  useEffect(() => {
    const deadline = new Date(comDetailDate);
    if (deadline < new Date()) {
      setIsExpired(true);
    }
  }, [comDetailDate]);

  if (isExpired) return null;

  const handleVoteSelection = (voteoption) => {
    const voteMapping = {
      '좋은 것 같아!': 'option1',
      '난 별로...': 'option2',
      '잘 모르겠어': 'option3',
    };

    // console.log(`Vote option selected: ${voteoption}`);
    setSelectedVote(voteMapping[voteoption] || voteoption);
  };

  return (
    <S.DetailQuizWrapper>
      <S.DetailQuizWallpaper>
        <S.DetailQuizTitle style={{ whiteSpace: 'pre-line' }}>
          {comDetailTitle}
        </S.DetailQuizTitle>
        <S.VoteContainer>
          {['좋은 것 같아!', '난 별로...', '잘 모르겠어'].map((option) => (
            <S.VoteContent
              key={option}
              onClick={() => handleVoteSelection(option)}
              className={`${
                selectedVote === voteMapping[option]
                  ? 'selected-background'
                  : ''
              }`}
            >
              {option}
              {selectedVote === voteMapping[option] ? (
                <S.VoteIcon />
              ) : (
                <S.CircleIcon />
              )}
            </S.VoteContent>
          ))}
        </S.VoteContainer>

        <S.ComDetailDate>{comDetailDate}</S.ComDetailDate>
      </S.DetailQuizWallpaper>
    </S.DetailQuizWrapper>
  );
}

export default ComDetailQuiz;
