import { styled, css } from 'styled-components';

export const CommunityWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  /* overflow: scroll; */
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

//CardResult.jsx
export const ComResultWrapper = styled.div`
  /* justify-content: left; */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ComResultBg = styled.div`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 8px;
  box-shadow: 2px 4px 10px 0 rgba(72, 74, 100, 0.1);
  justify-content: center;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const ComResultTitle = styled.div`
  text-align: center;
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 700;
  font-family: 'NotoSansMedium';
  line-height: 21px;
  justify-content: center;
`;

export const ComResultBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: 10px;
`;

export const ComResultBtn = styled.div`
  width: 58px;
  height: 24px;
  font-size: 10px;
  font-family: 'NotoSansMedium';
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray5};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GraphWrapper = styled.div`
  margin-top: 15px;
  .bar {
    height: 60px;
    text-align: center;
    line-height: 20px;
    margin-bottom: 10px;
    border-radius: 8px 0 0 8px;
    display: flex;
    align-items: center;
    position: absolute;
  }

  .good {
    background-color: ${({ theme }) => theme.colors.gray2};
    color: black;
  }

  .not-good {
    background-color: ${({ theme }) => theme.colors.gray2};
    color: black;
  }

  .dont-know {
    background-color: ${({ theme }) => theme.colors.gray2};
    color: black;
  }

  .max-vote {
    background-color: ${({ theme }) => theme.colors.gray5};
    border: 1px solid ${({ theme }) => theme.colors.gray5};
  }
`;

export const Graph = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  height: 62px;
  border-radius: 8px;
  margin-left: 30px;
  margin-bottom: 10px;
  margin: 15px;
  background-color: white;

  .max-vote {
    border: 1px solid #484a64;
  }
`;

export const Graphper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
  width: 100%;
  font-size: 12px;
  font-family: 'NotoSansMedium';
  font-weight: 500;
  z-index: 1;
`;

export const CircleIcon = styled.img`
  width: 10%;
  display: flex;
  margin-left: 15px;
  z-index: 1;
`;

export const GraphText = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 20px;
  height: 60px;
  color: white;
  font-size: 12px;
  font-family: 'NotoSansRegular';
  font-weight: 500;
`;

export const ResultDate = styled.div`
  color: #c0c5dc;
  font-size: 10px;
  margin-left: 17px;
  margin-bottom: 10px;
`;

export const ResultLineImg = styled.img`
  width: 5px;
  display: flex;
`;

export const ResultLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const ResultText = styled.div`
  text-align: center;
  width: 100%;
  line-height: 24.5px;
  font-size: 14px;
  font-family: 'NotoSansMedium';
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray4};
`;

export const ResultTextSub = styled.div`
  text-align: center;
  width: 100%;
  justify-content: center;
  line-height: 17.5px;
  font-size: 10px;
  font-family: 'NotoSansMedium';
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray3};
  margin-top: 20px;
`;

export const ResultCloud = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const ResultCloudImg = styled.img`
  width: 354px;
  height: 286px;
  //워드클라우드 api 연동시 삭제 할 내용
  border: 1px solid red;
`;
