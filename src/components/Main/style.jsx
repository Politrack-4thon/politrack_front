import { styled } from 'styled-components';

// 프로필 메인_타이틀
export const MainSubTitleBar = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SubTitle = styled.div `
color: ${({ theme }) => theme.colors.black};
font-family: Noto Sans KR;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
margin: 24px 0;
margin-left: 20px;
`;

// 특정 지역 선거구, 투표구, 선거인 수 정보
export const LocalVoteContainer = styled.div `
width: 107px;
height: 83px;
flex-shrink: 0;
border-radius: 6px;
border: 1px solid var(--main-gray-2, #EBEDF8);
background: var(--main-gray-1, #F6F7FE);
display: flex; 
flex-direction: column;
justify-content: center; 
align-items: center; 
gap: 15px;


`;

export const IconTitle = styled.div `
display:flex;
align-items:center;
gap: 5px;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const Value = styled.div `
color:  ${({ theme }) => theme.colors.black};
font-family: NanumGothic;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
// 검색
export const SearchContainer = styled.div `
display:flex;
gap:16px;
flex-direction:space-between;
justify-content:center;
margin-top:36px;
`;

export const SearchButton = styled.div `
width: 40px;
height: 40px;
flex-shrink: 0;
border-radius: 8px;
background: var(--main-gray-2, #EBEDF8);
display: flex;
justify-content: center;
align-items: center;
`;
export const SearchInput = styled.div `
width: 294px;
height: 40px;
flex-shrink: 0;
border-radius: 8px;
background: var(--main-gray-1, #F6F7FE);
margin-left: 8px;
display: flex;
align-items: center;

`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  padding-left: 8px;
  color: #484A64; 
  font-family: "Noto Sans KR"; 
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%; /* 21px */
  `;



// 프로필 메인_지도
export const MainMap = styled.div `
display:flex;
justify-content:center;
margin: 32px 0 27px 0;
`;

// 특정 지역 선거구, 투표구, 선거인 수 정보
export const MainVoteInfoContainer = styled.div `
flex-shrink: 0;
border-radius: 6px;
border: 1px solid var(--main-gray-2, #EBEDF8);
background: var(--main-gray-1, #F6F7FE);
display: flex; 
flex-direction: column;
justify-content: center; 
align-items: center; 
gap: 17px;

`;

export const IconAndTitle = styled.div `
display:flex;
align-items:center;
gap: 5px;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const Val = styled.div `
color:  ${({ theme }) => theme.colors.black};
font-family: NanumGothic;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

// MainVoteResult.jsx
export const MainVoteResultContainer = styled.div `

display:flex;
margin-left:20px;
`;

export const Party1 = styled.div `
width: 100px; // 변경해야함
height: 48px;
flex-shrink: 0;
border-radius: 4px 0px 0px 4px;
background: var(--blue, #004EA1);
color: var(--main-white, #FFF);
font-family: Noto Sans KR;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
export const Party2 = styled.div `
width: 100px; // 변경해야함
height: 48px;
flex-shrink: 0;
border-radius: 4px 0px 0px 4px;
background: var(--red, #F00);
color: var(--main-white, #FFF);
font-family: Noto Sans KR;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;

// 버튼
export const SelectButton = styled.button `
width: 163px;
height: 40px;
flex-shrink: 0;
border-radius: 4px;
background: ${({ theme }) => theme.colors.gray2};
color: ${({ theme }) => theme.colors.gray5};
text-align: center;
font-family: Noto Sans KR;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const ButtonContainer = styled.div `
display:flex;
gap:24px;
margin-top:30px;
margin-bottom:60px;
margin-left: 20px;


`;

export const TextElectionCriteria = styled.div`
color: var(--main-gray-3, #C0C5DC);
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 8px 0 30px 20px;
`;

// 정치인 카드
export const MainCardContainer = styled.div`
flex-shrink: 0;
border-radius: 4px;
background: ${({ theme }) => theme.colors.gray1};
box-shadow: 2px 4px 10px 0px rgba(72, 74, 100, 0.10);
display:flex;
flex-direction:column;
justify-content: center; 
align-items:center;
gap: 8px;

`;
export const MainCardImage = styled.div`

`;
export const MainCardParty = styled.div `
flex-shrink: 0;
border-radius: 4px;
background: ${({ theme }) => theme.colors.blue};
color: #FFF;
text-align: center;
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 15px */
`;

export const MainCardName = styled.div `
color: #000;
text-align: center;
font-family: Noto Sans KR;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 18px */
`;

export const MainCardDistrict = styled.div`
color: var(--main-gray-4, #7F85A3);
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const MainCardUrl = styled.div  `
display:flex;
gap: 52px;
`;

// 검색 실패
export const SearchErrorContainer = styled.div `
width: 223px;
height: 111px;
flex-shrink: 0;
border-radius: 8px;
background: var(--main-gray-1, #F6F7FE);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap: 10px;
`;
export const SearchErrorContent1 = styled.div `
color: #000;
font-family: Noto Sans KR;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const SearchErrorContent2 = styled.div `
color: #000;
text-align: center;
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 175%; /* 17.5px */
`;

export const SearchErrorBtn = styled.button `
width: 50px;
height: 24px;
flex-shrink: 0;
border-radius: 50px;
background: ${({ theme }) => theme.colors.black};
color: ${({ theme }) => theme.colors.white};
text-align: center;
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 175%; /* 17.5px */
`;
