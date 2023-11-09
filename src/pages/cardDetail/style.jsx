import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
`;
export const MainContainer = styled.div``;
export const DetailTitle = styled.div`
  display: flex;
  flex-direction: column;
  height: 145px;
  width: 100%;
  max-width: 420px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.gray6};
  position: relative;
  background: linear-gradient(261deg, #c0c5dc -6.9%, #50526c 85.31%);
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
  margin-bottom: 10px;
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

export const MainVoteInfoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;
export const TextElectionCriteria = styled.div`
  color: var(--main-gray-3, #c0c5dc);
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
  background: #ebedf8;
`;

export const Cards = styled.div`
  display: flex;
  /* width: 100%; */
  /* border: 1px solid blue; */
  /* width: 80%; */
  justify-content: center;
`;
// Detail.jsx
export const cardDetail = styled.div`
  width: 100%;
`;

export const cardDetailContainer = styled.div`
  flex-shrink: 0;
  border-radius: 16px 16px 0px 0px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -4px 0px 24px 0px rgba(0, 0, 0, 0.12);
  padding: 20px 0;
`;
export const cardDetailRow = styled.div`
  display: flex;
  margin-left: 20px;
`;
export const cardDetailSummary = styled.div`
  width: 351px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray1};
  box-shadow: 2px 4px 10px 0px rgba(72, 74, 100, 0.1);
  padding: 26px 14px;

  margin-left: 20px;
`;

export const cardDetailBill = styled.div`
  width: 350px;
  height: 77px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray1};
  box-shadow: 2px 4px 10px 0px rgba(72, 74, 100, 0.1);
  color: ${({ theme }) => theme.colors.black};
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 54px;

  margin-left: 20px;
`;

export const billDetailBtn = styled.button`
  width: 58px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray5};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 15px */
`;
