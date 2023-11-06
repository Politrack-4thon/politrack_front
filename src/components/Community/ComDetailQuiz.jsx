import React, { useState, useEffect } from 'react';
import { API } from '../../api/axois'; // 아마도 axios를 사용하고 있으므로 'axios'일 것입니다.
import * as S from '../Community/style'; // 스타일링 관련 코드
import VoteModal from './VoteModal'; // 투표 모달 컴포넌트

function ComDetailQuiz() {
  const [selectedVote, setSelectedVote] = useState(null);
  const [comDetailTitle, setComDetailTitle] = useState('');
  const [comDetailDate, setComDetailDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVoteModalOpen, setVoteModalOpen] = useState(false);
  const [isVoteCompleted, setIsVoteCompleted] = useState(false);

  // 제목, 기한 데이터를 백엔드에서 가져오는 함수
  const fetchData = () => {
    // 데이터를 가져오는 API 호출
    API.get('https://example.com/api/data')
      .then((response) => {
        const data = response.data;
        // 가져온 데이터를 상태에 설정
        setComDetailTitle(data.comDetailTitle);
        setComDetailDate(data.comDetailDate);
        setLoading(false); // 로딩 완료
      })
      .catch((error) => {
        setError(error);
        setLoading(false); // 로딩 완료
      });
  };

  useEffect(() => {
    // 데이터를 가져와 상태 업데이트
    fetchData();
  }, []);

  const handleVoteSelection = (voteOption) => {
    let voteNumber;

    // 선택한 투표 항목에 따라 번호를 할당
    if (voteOption === '좋은 것 같아!') {
      voteNumber = 1;
    } else if (voteOption === '난 별로...') {
      voteNumber = 2;
    } else if (voteOption === '잘 모르겠어') {
      voteNumber = 3;
    }

    setSelectedVote(voteNumber);
    console.log('선택된 투표 항목:', voteNumber);
  };
  const handleVoteSubmission = () => {
    if (selectedVote) {
      // 선택한 투표 항목이 있는지 확인

      // POST 요청을 보내어 선택한 투표 번호를 백엔드로 전송
      API.post('https://example.com/api/vote', { selectedVote })
        .then((response) => {
          console.log('투표 성공:', response.data);
        })
        .catch((error) => {
          console.error('투표 실패:', error);
        });
    } else {
      console.error('투표할 항목을 선택해주세요.');
    }
  };

  useEffect(() => {}, []);

  if (loading || error) {
    // 더미 데이터
    const dummyData = {
      comDetailTitle:
        '“김포시의 서울시 편입에 \n대한 여러분의 생각은 어떤가요?”',
      comDetailDate: '2023.11.01 ~ 2023.11.11  21:00',
    };

    const handleVoteButtonClick = () => {
      if (!isVoteCompleted) {
        setVoteModalOpen(true); // 투표 모달 열기
      }
    };

    // 투표 후 모달 닫고 재투표까지 가능하도록
    const handleConfirm = () => {
      setVoteModalOpen(false); // 투표 모달 닫기
      if (selectedVote !== null) {
        // 이전 투표 데이터 삭제 API 호출
        API.delete('https://example.com/api/vote')
          .then((deleteResponse) => {
            if (deleteResponse.status === 200) {
              console.log('이전 투표 데이터 삭제 완료');
              // 새로운 데이터 가져오기 API 호출
              API.get('https://example.com/api/new-vote-data')
                .then((getResponse) => {
                  if (getResponse.status === 200) {
                    console.log('새로운 투표 데이터 가져오기 완료');
                    setIsVoteCompleted(true); // 투표 완료 처리
                  } else {
                    console.error('새로운 투표 데이터 가져오기 실패');
                  }
                })
                .catch((getFetchError) => {
                  console.error(
                    '새로운 투표 데이터 가져오기 실패',
                    getFetchError
                  );
                });
            } else {
              console.error('이전 투표 데이터 삭제 실패');
            }
          })
          .catch((deleteFetchError) => {
            console.error('이전 투표 데이터 삭제 실패', deleteFetchError);
          });
      }
    };

    useEffect(() => {}, []);

    //더미데이터 - 백엔드 통신 완료시 삭제 (백엔드 통신 전이라 투표 -> 재투표로 변경되지 않음)
    return (
      <S.DetailQuizWrapper>
        <S.DetailQuizWallpaper>
          <S.Vote
            className={selectedVote ? 'selected' : ''}
            onClick={() => {
              if (!isVoteCompleted) {
                handleVoteButtonClick();
              } else {
                handleVoteSubmission();
              }
            }}
          >
            <S.VoteText selected={selectedVote}>
              {isVoteCompleted ? '재투표' : '투표하기'}
            </S.VoteText>
          </S.Vote>
          {isVoteModalOpen && (
            <VoteModal isOpen={isVoteModalOpen} onClose={handleConfirm} />
          )}
          <S.DetailQuizTitle style={{ whiteSpace: 'pre-line' }}>
            {loading || error ? dummyData.comDetailTitle : comDetailTitle}
          </S.DetailQuizTitle>
          <S.VoteContainer>
            <S.VoteContent
              onClick={() => handleVoteSelection('좋은 것 같아!')}
              className={`${selectedVote === 1 ? 'selected' : ''} ${
                selectedVote === 1 ? 'selected-background' : ''
              }`}
            >
              좋은 것 같아!{' '}
              {selectedVote === 1 ? <S.VoteIcon /> : <S.CircleIcon />}
            </S.VoteContent>
            <S.VoteContent
              onClick={() => handleVoteSelection('난 별로...')}
              className={`${selectedVote === 2 ? 'selected' : ''} ${
                selectedVote === 2 ? 'selected-background' : ''
              }`}
            >
              난 별로...{' '}
              {selectedVote === 2 ? <S.VoteIcon /> : <S.CircleIcon />}
            </S.VoteContent>
            <S.VoteContent
              onClick={() => handleVoteSelection('잘 모르겠어')}
              className={`${selectedVote === 3 ? 'selected' : ''} ${
                selectedVote === 3 ? 'selected-background' : ''
              }`}
            >
              잘 모르겠어{' '}
              {selectedVote === 3 ? <S.VoteIcon /> : <S.CircleIcon />}
            </S.VoteContent>
          </S.VoteContainer>
          <S.ComDetailDate>
            {loading || error ? dummyData.comDetailDate : comDetailDate}
          </S.ComDetailDate>
        </S.DetailQuizWallpaper>
      </S.DetailQuizWrapper>
    );
  }

  return (
    <S.DetailQuizWrapper>
      <S.DetailQuizWallpaper>
        <S.Vote className={selectedVote ? 'selected' : ''}>
          <S.VoteText selected={selectedVote}>
            {isVoteCompleted ? '재투표' : '투표하기'}
          </S.VoteText>
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
