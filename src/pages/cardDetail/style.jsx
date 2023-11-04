import { styled } from 'styled-components';

export const DetailWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  
`;
export const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  height: 145px;
  width: 100%;
  max-width: 420px;
  flex-shrink: 0;
  color:  ${({ theme }) => theme.colors.gray6};
  position: relative;
  background: linear-gradient(261deg, #C0C5DC -6.9%, #50526C 85.31%);

`;

export const DetailVoteLogo = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

export const VoteLogo = styled.img`
  width: 25%;
  align-items: center;
`;

export const DetailTitleTop = styled.div`
  display: flex;
  font-size: 10px;
  font-weight: 400;
  width: 100%;
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom:10px;
  line-height: 14.5px;
  color: ${({ theme }) => theme.colors.white};
`;

export const DetailTitleBottom = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
// 프로필 메인_지도
export const CardDetailMap = styled.div `
width: 90%;
height: 50px;
`;
// 프로필 메인_타이틀
export const CardDetailTitleBar = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardDetailTitle = styled.div `
color: ${({ theme }) => theme.colors.black};
font-family: Noto Sans KR;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
`;


// 버튼
export const CardDetailButton = styled.button `
width: 70px;
height: 24px;
flex-shrink: 0;
border-radius: 4px;
background: ${({ theme }) => theme.colors.gray2};
color: var(--main-gray-5, #484A64);
text-align: center;
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 15px */

`;

export const ButtonContainer = styled.div `
display:flex;


`;

export const LocalVoteContainer = styled.div `
width: 107px;
height: 83px;
flex-shrink: 0;
border-radius: 6px;
border: 1px solid var(--main-gray-2, #EBEDF8);
background: var(--main-gray-1, #F6F7FE);
display:flex;
flex-direction:row;
justify-content:center;
`;
export const LocalVoteInfoContainer = styled.div `
display:flex;
gap:15px;
`
