import { styled } from 'styled-components';

//communitytop.jsx에 대한 styled-components
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
  background: linear-gradient(to left, #c0c5dc 0%, #50526c 100%);
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

//CommunityQuestion.jsx

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 25px;
  position: relative;
  z-index: 2;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Question_sub = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
  font-family: 'NotoSansRegular';
`;

export const Question_main = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
  font-family: 'NotoSansMedium';
  font-weight: 700;
`;

export const VoteResultText = styled.div`
  width: 120px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.gray3};
  font-size: 12px;
  font-weight: 700;
  font-family: 'NotoSansMedium';
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const VoteResult = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//CommunityContent.jsx

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ContentBg = styled.div`
  width: 90%;
  height: 100px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray1};
  box-shadow: 2px 4px 10px 0 rgba(72, 74, 100, 0.1);
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  margin-top: 15px;
  justify-content: space-between;
`;

export const ContentTitle = styled.div`
  font-size: 14px;
  font-family: 'NotoSansMedium';
  font-weight: 700;
  margin-left: 20px;
`;

export const VoteStatusContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 24px;
  justify-content: flex-end;
  display: flex;
`;

export const VoteStatus = styled.div`
  width: 58px;
  height: 24px;
  font-size: 10px;
  font-family: 'NotoSansRegular';
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.gray5};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: white;
  margin-right: 10px;
`;

export const ContentText = styled.div`
  font-size: 10px;
  font-family: 'NotoSansRegular';
  font-weight: 400;
  line-height: 17.5px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;

//CommunityDetailBg.jsx

export const DetailBgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export const DetailWallpaper = styled.div`
  width: 90%;

  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 8px;
  box-shadow: 2px 4px 10px 0 rgba(72, 74, 100, 0.1);
`;

export const DetailTitle = styled.div``;
