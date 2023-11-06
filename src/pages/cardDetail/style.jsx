import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  
`;
export const MainContainer = styled.div `
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



export const MainVoteInfoContainer = styled.div `
display:flex;
gap:27px;
margin-left: 20px;
`
export const TextElectionCriteria = styled.div`
color: var(--main-gray-3, #C0C5DC);
font-family: Noto Sans KR;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin: 8px 0 30px 20px;
`;

export const Border = styled.div`
width: 100%;
height: 1px;
background: #EBEDF8;
`;

export const Cards = styled.div`
diplay:flex;
`;