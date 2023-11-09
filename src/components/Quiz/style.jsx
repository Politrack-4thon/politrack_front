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