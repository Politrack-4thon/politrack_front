import { styled } from 'styled-components';

export const CommunityWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  overflow-x: hidden;
`;

export const CommuTitle = styled.div`
  display: flex;
  flex-direction: column;
  height: 145px;
  width: 100%;
  max-width: 420px;
  flex-shrink: 0;
  color: white;
  background-color: ${({ theme }) => theme.colors.gray5};
  position: relative;
`;

export const CommuVoteLogo = styled.div`
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

export const CommuTitleTop = styled.div`
  display: flex;
  font-size: 10px;
  font-weight: 400;
  width: 100%;
  margin-top: 30px;
  margin-left: 20px;
  line-height: 14.5px;
`;

export const CommuTitleBottom = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 10px;
  margin-left: 20px;
`;
