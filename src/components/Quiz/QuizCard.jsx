import React, { useState, useEffect } from 'react';
import * as S from './style';
import Slider from 'react-slick';
import AnswerDes from './AnswerDes';
import { API } from '../../api/axois';

// 더미 데이터 정의
const dummyData = {
  quiz: '1',
  description: '빈칸에 들어갈 알맞은 단어는 무엇일까요?',
  pick_title:
    '여당은 정부와 같은 편이 되는 정당을 의미하며 \n대통령을 배출한 정당이 정권을 담당합니다.',
  pick: ['Option 1', 'Option 2'],
  answer: 'Option 1',
  answer_des:
    '여당의 여(與)는 "같은 편" 또는 "돕다"라는 뜻이며, 야당은 재야 정당(在野政黨)의 준말로, 현재 정당 정치에서 정권을 잡고 있지 않은 정당입니다.',
};

function QuizCard() {
  const [quizData, setQuizData] = useState({
    quiz: '',
    description: '',
    pick_title: '',
    pick: [],
    answer: '',
    answer_des: '',
  });

  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerDesOpen, setIsAnswerDesOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get('/politician/quiz/');
        if (response.status === 200 && response.data) {
          // 'pick' 문자열을 배열로 변환
          const picks = response.data.pick
            .split(', ')
            .map((pick) => pick.trim());
          setQuizData({ ...response.data, pick: picks });
        } else {
          console.error('Error fetching quiz data:', response.statusText);
          // 오류 시 더미 데이터 설정
          setQuizData(dummyData);
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
        setQuizData(dummyData);
      }
    }

    fetchData();
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswerDesOpen(true);
  };

  return (
    <S.QuizWrapper>
      <S.QuizContainer>
        <S.QuizTop>{quizData.description}</S.QuizTop>
        <S.QuizContent style={{ whiteSpace: 'pre-line' }}>
          {quizData.pick_title}
        </S.QuizContent>
        <S.QuizOptions>
          {quizData.pick.map((option, index) => (
            <S.Option key={index} onClick={() => handleOptionClick(option)}>
              {/* "Option 1"은 "O"로, "Option 2"는 "X"로 표시 */}
              <S.OptionText>{option === 'Option 1' ? 'O' : 'X'}</S.OptionText>
            </S.Option>
          ))}
        </S.QuizOptions>
      </S.QuizContainer>

      {isAnswerDesOpen && (
        <AnswerDes
          isCorrect={selectedOption === quizData.answer}
          answerDes={quizData.answer_des}
          onClose={() => setIsAnswerDesOpen(false)}
        />
      )}
    </S.QuizWrapper>
  );
}

export default QuizCard;
