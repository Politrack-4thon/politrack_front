import React, { useState, useEffect, Component } from 'react';
import * as S from './style';
import Slider from 'react-slick';
import AnswerDes from './AnswerDes';
import { API } from '../../api/axois';
import { styled } from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 더미 데이터 정의
const dummyData = {
  quiz_id: '1',
  description: '빈칸에 들어갈 알맞은 단어는 무엇일까요?',
  pick_title:
    '여당은 정부와 같은 편이 되는 정당을 의미하며 \n대통령을 배출한 정당이 정권을 담당합니다.',
  pick: ['Option 1', 'Option 2'],
  answer: 'Option 1',
  answer_des:
    '여당의 여(與)는 "같은 편" 또는 "돕다"라는 뜻이며, 야당은 재야 정당(在野政黨)의 준말로, 현재 정당 정치에서 정권을 잡고 있지 않은 정당입니다.',
};
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

function QuizCard() {
  const [quizData, setQuizData] = useState({
    quiz_id: '',
    description: '',
    pick_title: '',
    pick: [],
    answer: '',
    answer_des: '',
  });

  const [selectedOption, setSelectedOption] = useState('');
  const [isAnswerDesOpen, setIsAnswerDesOpen] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0); // 현재 퀴즈 인덱스 저장

  const fetchData = async () => {
    try {
      const response = await API.get(`/politician/quiz/${currentQuizIndex}`);
      if (response.status === 200 && response.data) {
        const picks = response.data.pick.split(', ').map((pick) => pick.trim());
        setQuizData({ ...response.data, pick: picks });
      } else {
        console.error('Error fetching quiz data:', response.statusText);
        // 오류 시 더미 데이터 설정
        setQuizData(dummyData);
      }
    } catch (error) {
      console.error('Error fetching quiz data:', error);
      // 오류 시 더미 데이터 설정 또는 다른 적절한 대처
      setQuizData(dummyData);
    }
  };

  const goToNextQuiz = async () => {
    setCurrentQuizIndex(currentQuizIndex + 1);
    await fetchData(); // fetchData를 호출하여 다음 퀴즈 데이터를 가져옵니다.
  };

  useEffect(() => {
    fetchData(); // 초기 렌더링 시에도 첫 번째 퀴즈 데이터를 가져옵니다.
  }, [currentQuizIndex]); // currentQuizIndex가 변경될 때마다 useEffect가 실행됩니다.

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswerDesOpen(true);
  };
  const settings = {
    arrow: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true, // 추가
    draggable: true, // 추가
    touchMove: true, // 추가
    swipeToSlide: true, // 추가
    centerMode: true,
    centerPadding: '0px',
  };

  const StyledSlider = styled(Slider)`
    .slick-list {
      width: 100%;
      margin: 0 auto;
    }

    .element-selector {
      -webkit-touch-callout: auto;
    }
    .slick-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-user-select: none;
      webkit-user-select: auto;
      -moz-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
      -webkit-touch-callout: auto;
      -khtml-user-select: auto;
      -ms-touch-action: auto;
      touch-action: auto;
      -webkit-tap-highlight-color: initial;
    }
  `;

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
