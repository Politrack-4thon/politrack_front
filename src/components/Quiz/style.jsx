import { styled } from 'styled-components';



export const QuizWrapper = styled.div `
width: 350px;
flex-shrink: 0;
border-radius: 8px;
background: ${({ theme }) => theme.colors.gray1};
box-shadow: 2px 4px 10px 0px rgba(72, 74, 100, 0.10);
display:flex;
padding: 64px 40px 32px;
margin-left: 20px;
position:relative;
`;

export const QuizContainer = styled.div ` 
`;

export const QuizTop = styled.div `
color: ${({ theme }) => theme.colors.gray4};
text-align: center;
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 15px */
margin-bottom: 8px;
`;
export const QuizContent = styled.div `
color: ${({ theme }) => theme.colors.black};
text-align: center;
font-family: Noto Sans KR;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 21px */
margin-bottom: 36px;
`;

export const QuizOptions = styled.div `
display:flex;
gap: 20px;

`;

export const Option = styled.div `
width: 125px;
height: 90px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid  ${({ theme }) => theme.colors.gray2};
background:  ${({ theme }) => theme.colors.white};
display:flex;
justify-content:center;
align-items:center;
`;


export const QuizBtn = styled.button ` 

`;

// 퀴즈 해설지
export const AnswerDesWrapper = styled.div `
position: absolute;
top: 0;
left: 0;
width: 350px;
height: 308px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.5);
z-index: 1;
border-radius: 8px;
`
export const AnswerDesBg = styled.div `
position: absolute;
width: 293px;
height: 200px;
flex-shrink: 0;
border-radius: 8px;
background:  ${({ theme }) => theme.colors.white};
display: flex;
justify-content:center;
align-items:center;

`;

export const isAnswer = styled.div`
color:  ${({ theme }) => theme.colors.black};
font-family: Noto Sans KR;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const answerIcon = styled.div`

`;

export const answerDes = styled.div`
color:  ${({ theme }) => theme.colors.gray5};
text-align: center;
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 175%; /* 17.5px */
`;
export const answerBtn = styled.button`
width: 50px;
height: 24px;
flex-shrink: 0;
border-radius: 50px;
background:  ${({ theme }) => theme.colors.black};
color:  ${({ theme }) => theme.colors.white};
text-align: center;
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 175%; /* 17.5px */

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
