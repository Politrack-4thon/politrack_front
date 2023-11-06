import { styled } from 'styled-components';

export const CommunityWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  overflow: scroll;
`;

//CommunityDetail.jsx

export const CommunityDetailWrapper = styled.div`
  min-height: calc(100vh - 250px);
  width: 100%;
`;

export const ComDetailOpinion = styled.div``;

export const QuestionResult = styled.div`
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.gray3};
  font-size: 12px;
  font-weight: 700;
  font-family: 'NotoSansMedium';
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 20px;
  margin-right: 15px;
`;

export const ComDetailVoteContainer = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;
