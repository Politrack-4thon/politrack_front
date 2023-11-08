import React from "react";
import * as S from './style';



function QuizCard() {
    return (
        <S.QuizWrapper>
            <S.QuizContainer>
                <S.QuizTop>dsd</S.QuizTop>
                <S.QuizContent>dfs</S.QuizContent>
                <S.QuizOptions>
                    <S.Option>df</S.Option>
                    <S.Option>df</S.Option>
                </S.QuizOptions>
            </S.QuizContainer>
            <S.QuizBtn><img src="src/assets/images/arrow_back.svg"  style={{ transform: 'rotate(90deg)' }}/></S.QuizBtn>

        </S.QuizWrapper>
    );
}

export default QuizCard;