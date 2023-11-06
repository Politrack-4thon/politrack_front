import React, { useState, useEffect } from 'react';
import { API } from '../../api/axois';
import * as S from '../Community/style';

function ComDetailQuiz() {
  const [selectedVote, setSelectedVote] = useState(null);
  const [comDetailTitle, setComDetailTitle] = useState('');
  const [comDetailDate, setComDetailDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleVoteSelection = (voteOption) => {
    if (selectedVote === voteOption) {
      setSelectedVote(null);
    } else {
      setSelectedVote(voteOption);
    }
  };

  useEffect(() => {
    API.get('https://example.com/api/comDetail')
      .then((response) => {
        const data = response.data;
        setComDetailTitle(data.comDetailTitle);
        setComDetailDate(data.comDetailDate);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  // 데이터 로딩 중 또는 오류가 발생한 경우 더미 데이터 사용
  if (loading || error) {
    // 더미 데이터
    const dummyData = {
      comDetailTitle:
        '“김포시의 서울시 편입에 \n대한 여러분의 생각은 어떤가요?”',
      comDetailDate: '2023.11.01 ~ 2023.11.11  21:00',
    };

    return (
      <S.DetailQuizWrapper>
        <S.DetailQuizWallpaper>
          <S.Vote className={selectedVote ? 'selected' : ''}>
            <S.VoteText selected={selectedVote}>투표하기</S.VoteText>
          </S.Vote>
          <S.DetailQuizTitle style={{ whiteSpace: 'pre-line' }}>
            {dummyData.comDetailTitle}
          </S.DetailQuizTitle>
          <S.VoteContainer>
            <S.VoteContent
              onClick={() => handleVoteSelection('좋은 것 같아!')}
              className={`${
                selectedVote === '좋은 것 같아!' ? 'selected' : ''
              } ${
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
              {selectedVote === '난 별로...' ? (
                <S.VoteIcon />
              ) : (
                <S.CircleIcon />
              )}
            </S.VoteContent>
            <S.VoteContent
              onClick={() => handleVoteSelection('잘 모르겠어')}
              className={`${selectedVote === '잘 모르겠어' ? 'selected' : ''} ${
                selectedVote === '잘 모르겠어' ? 'selected-background' : ''
              }`}
            >
              잘 모르겠어{' '}
              {selectedVote === '잘 모르겠어' ? (
                <S.VoteIcon />
              ) : (
                <S.CircleIcon />
              )}
            </S.VoteContent>
          </S.VoteContainer>
          <S.ComDetailDate>{dummyData.comDetailDate}</S.ComDetailDate>
        </S.DetailQuizWallpaper>
      </S.DetailQuizWrapper>
    );
  }

  // 백엔드에서 데이터를 성공적으로 가져온 경우
  return (
    <S.DetailQuizWrapper>
      <S.DetailQuizWallpaper>
        <S.Vote className={selectedVote ? 'selected' : ''}>
          <S.VoteText selected={selectedVote}>투표하기</S.VoteText>
        </S.Vote>
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
