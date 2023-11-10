import { styled } from 'styled-components';

export const QuizWrapper = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  margin-top: 20px;
  // margin-left: 20px;
`;

export const QuizContainer = styled.div`
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray1};
  box-shadow: 2px 4px 10px 0px rgba(72, 74, 100, 0.1);
  display: flex;
  flex-direction: column;
  padding: 44px 20px 32px;
  position: relative;
  height: 300px;
  width: 80%;
`;

export const QuizTop = styled.div`
  color: ${({ theme }) => theme.colors.gray4};
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 15px */
  /* margin-bottom: 8px; */
`;
export const QuizContent = styled.div`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  /* margin-bottom: 36px; */
  margin-top: 10px;
`;

export const QuizOptions = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

export const Option = styled.div`
  width: 45%;
  height: 90px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  cursor: pointer;
`;

export const OptionText = styled.div`
  font-size: 12px;
  font-family: Noto Sans KR;
`;

// export const QuizBtn = styled.button``;

// 퀴즈 해설지
export const AnswerWrapper = styled.div`
  width: 80%;
  height: 300px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  /* border: 1px solid red; */
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Answer = styled.div`
  background-color: white;
  width: 80%;
  height: 228px;
  border-radius: 8px;
`;
export const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const AnswerImg = styled.img``;

export const AnswerText = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
`;

export const AnswerBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  font-size: 10px;
  color: white;
  background-color: black;
  width: 20%;
  height: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
`;

export const AnswerDes = styled.div`
  width: 100%;
  padding: 10px 20px;
  font-size: 10px;
  font-weight: 400;
  color: #484a64;
  text-align: center;
  line-height: 175%;
`;

// 퀴즈 top
export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 25px;
  position: relative;
  z-index: 2;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Question_sub = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
  font-family: 'NotoSansRegular';
`;

export const Question_main = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
  font-family: 'NotoSansMedium';
  font-weight: 700;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
