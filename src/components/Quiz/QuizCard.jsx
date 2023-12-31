import React, { useState, useEffect } from 'react';
import * as S from './style';
import AnswerDes from './AnswerDes';
import { API } from '../../api/axois';

function QuizCard() {
  const [quizData, setQuizData] = useState({
    quiz_id: '',
    description: '',
    pick_title: '',
    pick:'',
    answer: '',
    answer_des: '',
  });

  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerDesOpen, setIsAnswerDesOpen] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(1);

  const fixedPicks = ['option1', 'option2']; // 항상 고정된 옵션

  const fetchData = async () => {
    try {
      const response = await API.get(`/politician/quiz/${currentQuizIndex}`);
      if (response.status === 200 && response.data) {
        setQuizData(response.data);
      } else {
        console.error('Error fetching quiz data:', response.statusText);
        // 오류 처리 로직
      }
    } catch (error) {
      console.error('Error fetching quiz data:', error);
      // 오류 처리 로직
    }
  };


  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswerDesOpen(true);
  };

  const goToNextQuiz = () => {
    setCurrentQuizIndex(currentQuizIndex + 1);
  };
  useEffect(() => {
    fetchData();
  }, [currentQuizIndex]);
  useEffect(() => {
    console.log(selectedOption)
  }, [selectedOption]);

  useEffect(() => {
    console.log(quizData.answer)
  }, [quizData]);
  
  return (
    <S.QuizWrapper>
      <S.QuizContainer>
        <S.QuizTop>{quizData.description}</S.QuizTop>
        <S.QuizContent style={{ whiteSpace: 'pre-line' }}>
          {quizData.pick_title}
        </S.QuizContent>

        <S.QuizOptions>
          {fixedPicks.map((option, index) => (
            <S.Option key={index} onClick={() => handleOptionClick(option)}>
              <S.OptionText>{option === 'option1' ? 'O' : 'X'}</S.OptionText>
            </S.Option>
          ))}
        </S.QuizOptions>
      </S.QuizContainer>

      {isAnswerDesOpen && (
        <AnswerDes
          isCorrect={selectedOption === quizData.answer}
          answerDes={quizData.answer_des}
          onClose={() => {
            setIsAnswerDesOpen(false);
            goToNextQuiz();
          }}
        />
      )}
    </S.QuizWrapper>
  );
}

export default QuizCard;
