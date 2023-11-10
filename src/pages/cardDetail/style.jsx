import { styled } from 'styled-components';
import { StyledLoginButton } from '../../components/Login/style';

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

export const Loading = styled.div`
  width: 100%;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%;
  font-family: Noto Sans KR;
  align-items: center;
  display: flex;
  text-align: center;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
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
  justify-content: center;
`;

export const cardDetailSummaryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const cardDetailSummary = styled.div`
  width: 85%;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray1};
  box-shadow: 2px 4px 10px 0px rgba(72, 74, 100, 0.1);
  padding: 26px 14px;
  font-size: 12px;
  line-height: 150%;
  font-family: Noto Sans KR;

  font-weight: 500;
`;

export const CardDetailBillWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const cardDetailBill = styled.div`
  width: 85%;
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
  gap: 30px;
  margin-bottom: 20px;
  justify-content: space-between;
  padding: 20px;
`;

export const billDetailBtn = styled.button`
  width: 20%;
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

export const MainSelectBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* border: 1px solid red; */
`;

// 맵

export const Map = styled.div`
  position: relative;
  margin: 32px 0 70px 0px;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MapImg = styled.img`
  /* margin-left: 20px; */
  width: 90%;
  width: 350px;
  height: 250px;
`;

// 선택된 구 정보
export const selectOrigWrapper = styled.div``;
export const SelectOrigTitle = styled.div`
  color: var(--main-black, #000);
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 20px;
  margin-bottom: 8px;
`;

export const SelectOrigSubTitle = styled.div`
  color: var(--main-gray-4, #7f85a3);
  font-family: Noto Sans KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 20px;
  margin-bottom: 32px;
`;
