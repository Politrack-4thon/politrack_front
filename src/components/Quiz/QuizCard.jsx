import React from "react";
import * as S from './style';
import { useState,useEffect } from "react";

import AnswerDes from "./AnswerDes";


function QuizCard() {
    const [data, setData] = useState({
        quiz : '', 
        description: '', 
        pick_title:'', 
        pick:'', 
        answer:'', 
        answer_des:'',
    
    });
    

      // 디테일 
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await API.get('/politician/quiz/');
            setData(response.data); // data값들 상태 값 변경

            if (response.status === 200) {
            const data = response.data;
            setData(data);
            } else {
            console.error(
                'Error fetching community content:',
                response.statusText
            );
            }
        } catch (error) {
            console.error('Error fetching community content:', error);
            setData ({
                quiz : '', 
                description: '', 
                pick_title:'', 
                pick:'', 
                answer:'', 
                answer_des:'',
            })
        }
        }

        fetchData();
    }, []);

    const handleOption1 = () => {
        quizData.pick = 'Option1';
        if(quizData.answer != quizData.pick) {
            <AnswerDes
            isAnswer='오답입니다'
            answerIcon='src/assets/images/incorrect.svg'
            />
        } else {
            <AnswerDes
            isAnswer='정답입니다!'
            answerIcon='src/assets/images/correct.svg'
            />
        }
    }
    const [isAnswerDesOpen, setAnswerDes] = useState(false);

    const handleOption1Click = () => {
        setAnswerDes(true); // 해설 모달 열기
    };
    
    // 다음 퀴즈로 넘어가기
    const handleConfirm = () => {

    }
  

    return (
        <S.QuizWrapper>
            <S.QuizContainer>
                <S.QuizTop>{data.description}</S.QuizTop>
                <S.QuizContent>{data.pick_title}</S.QuizContent>
                <S.QuizOptions>
                    <S.Option onClick={handleOption1Click}>{data.pick}</S.Option>
                    <S.Option>{}</S.Option>
                </S.QuizOptions>
            </S.QuizContainer>
            <S.QuizBtn><img src="src/assets/images/arrow_back.svg"  style={{ transform: 'rotate(90deg)' }}/></S.QuizBtn>
            {isAnswerDesOpen && (
            <AnswerDes isOpen={isAnswerDesOpen} onClose={handleConfirm} />
          )}


        </S.QuizWrapper>
    );
}

export default QuizCard;