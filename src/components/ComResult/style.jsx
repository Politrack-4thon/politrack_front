import { styled, css } from 'styled-components';

export const ResultCommonWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 10px;
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
