import { styled } from 'styled-components';

// 프로필 메인_타이틀
export const CardDetailTitleBar = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DetailTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
`;

// 프로필 메인_지도
export const CardDetailMap = styled.div`
  width: 90%;
  height: 50px;
`;

// DetailVoteResult.jsx
export const DetailVoteResultContainer = styled.div`
  display: flex;
`;

export const Party1 = styled.div`
  width: 100px; // 변경해야함
  height: 48px;
  flex-shrink: 0;
  border-radius: 4px 0px 0px 4px;
  background: var(--blue, #004ea1);
  color: var(--main-white, #fff);
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Party2 = styled.div`
  width: 100px; // 변경해야함
  height: 48px;
  flex-shrink: 0;
  border-radius: 4px 0px 0px 4px;
  background: var(--red, #f00);
  color: var(--main-white, #fff);
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// 버튼
export const CardDetailButton = styled.button`
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

export const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 30px;
  margin-bottom: 80px;
`;

// CardDetailThumnail.jsx
export const ThumnailContainer = styled.div`
  width: 170px;
  height: 230px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray1};
  box-shadow: 2px 4px 10px 0px rgba(72, 74, 100, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const ThumnailImage = styled.div``;
export const ThumnailParty = styled.div`
  width: 70px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.blue};
  color: #fff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 15px */
`;

export const ThumnailName = styled.div`
  color: #000;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;

export const ThumnailDistrict = styled.div`
  color: var(--main-gray-4, #7f85a3);
  font-family: Noto Sans KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ThumnailUrl = styled.div`
  display: flex;
  gap: 52px;
`;
