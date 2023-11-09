import React from "react";
import * as S from './style';

import { useEffect } from "react";
import { useState } from "react";


function AnswerDes(props) {
  const [quizData, setQuizData] = useState({
    quiz: null,
    description: "",
    pick_title: "",
    pick: "",
    answer: "",
    answer_des: "",
  });

  useEffect(() => {
    fetch("/quiz")
      .then((response) => response.json())
      .then((data) => {
        setQuizData(data);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
      });
  }, []);
  return (
    <S.AnswerDesWrapper>
        <S.AnswerDesBg>
            <S.isAnswer>{props.isAnswer}</S.isAnswer>
            <S.answerIcon>{props.answerIcon}</S.answerIcon>
            <S.answerDes>{quizData.answer_des}</S.answerDes>
            <S.answerBtn>확인</S.answerBtn>
        </S.AnswerDesBg>
    </S.AnswerDesWrapper>
)

}
export default AnswerDes;