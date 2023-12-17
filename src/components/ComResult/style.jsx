import { styled, css } from 'styled-components';

export const NoneResultCommonWrapper = styled.div`
  width: 100%;
  /* text-align: center; */
  justify-content: center;
  line-height: 170%;
  margin-top: 20px;
  align-content: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 1px solid red; */
  align-items: center;
`;

export const NoneResultCommonText = styled.div`
  width: 70%;
  border-radius: 8px;
  background-color: #f6f7fe;
  padding: 10px;
  font-family: 'NotoSansRegular';
  font-size: 12px;
`;

export const ResultCommonWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ResultCommonCard = styled.div`
  width: 90%;
  height: 63px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResultCommonText = styled.div`
  font-size: 12px;
  font-family: 500;
  line-height: 170%;
`;
