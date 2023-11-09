import React, { useEffect, useState } from 'react';
import * as S from './style';
import { API } from '../../api/axois';

//component import
import CommunityQuestion from '../../components/Community/CommunityQuestion';
import CommunityTop from '../../components/Community/CommunityTop';

// 이미지 파일을 import
import circleIconImage from '/Community/VoteIconColor.png';
import circleIconNoImage from '/Community/VoteResultNo.png';

function ComResult() {
  const [data, setData] = useState({
    title: '',
    option1_count: 0,
    option2_count: 0,
    option3_count: 0,
    resultDate: '',
  });

  const [wordcloudImage, setWordcloudImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(
          '/politician/community/<community_id>/board/<int:board_id>/result'
        );
        setData(response.data);

        // 백엔드에서 받아온 wordcloud 이미지 URL 설정
        const wordcloudURL = `/politician/community/{community_id}/wordcloud`;
        setWordcloudImage(wordcloudURL);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생: ', error);
        // 에러 발생 시 더미 데이터 사용
        setData({
          title: '"김포시의 서울시 편입에\n 대한 여러분의 생각은 어떤가요?"',
          option1_count: 50,
          option2_count: 30,
          option3_count: 20,
          resultDate: '2023.11.01 ~ 2023.11.11 21:00',
        });
      }
    };

    fetchData();
  }, []);

  // 가장 큰 투표 결과 값을 찾는 로직
  const maxVoteCount = Math.max(
    data.option1_count,
    data.option2_count,
    data.option3_count
  );

  // 그래프 업데이트 로직
  const goodGraphWidth = (data.option1_count / 100) * 23;
  const notGoodGraphWidth = (data.option2_count / 100) * 23;
  const dontKnowGraphWidth = (data.option3_count / 100) * 23;

  // voteIcon 이미지 동적 설정
  const circleIconSrc1 =
    data.option1_count === maxVoteCount ? circleIconImage : circleIconNoImage;
  const circleIconSrc2 =
    data.option2_count === maxVoteCount ? circleIconImage : circleIconNoImage;
  const circleIconSrc3 =
    data.option3_count === maxVoteCount ? circleIconImage : circleIconNoImage;

  const maxVotePercentage = (() => {
    if (data.option1_count === maxVoteCount) {
      return (
        (data.option1_count /
          (data.option1_count + data.option2_count + data.option3_count)) *
        100
      );
    } else if (data.option2_count === maxVoteCount) {
      return (
        (data.option2_count /
          (data.option1_count + data.option2_count + data.option3_count)) *
        100
      );
    } else {
      return (
        (data.option3_count /
          (data.option1_count + data.option2_count + data.option3_count)) *
        100
      );
    }
  })();

  const maxVoteText = (() => {
    if (data.option1_count === maxVoteCount) {
      return '좋은 것 같아';
    } else if (data.option2_count === maxVoteCount) {
      return '난 별로,,';
    } else {
      return '잘 모르겠어';
    }
  })();

  //색상 지정
  const maxVotePercentageColor = (() => {
    if (data.option1_count === maxVoteCount) {
      return data.option1_count === maxVoteCount ? 'black' : '#7F85A3';
    } else if (data.option2_count === maxVoteCount) {
      return data.option2_count === maxVoteCount ? 'black' : '#7F85A3';
    } else {
      return data.option3_count === maxVoteCount ? 'black' : '#7F85A3';
    }
  })();

  const maxVoteTextColor = (() => {
    if (data.option1_count === maxVoteCount) {
      return data.option1_count === maxVoteCount ? 'black' : '#7F85A3';
    } else if (data.option2_count === maxVoteCount) {
      return data.option2_count === maxVoteCount ? 'black' : '#7F85A3';
    } else {
      return data.option3_count === maxVoteCount ? 'black' : '#7F85A3';
    }
  })();

  return (
    <S.ComResultWrapper>
      <CommunityTop
        titlesub={'발전하는 우리나라를 만들어 나가기 위한 첫걸음'}
        titleMain={'어려운 정치이슈, \n 폴리트랙에서 이야기 해봐요!'}
        style={{ whiteSpace: 'pre-line' }}
      />
      <CommunityQuestion
        subQuestion={'어떻게 생각하나요?'}
        mainQuestion={'여러분의 의견을 살펴보세요!'}
      />

      <S.ComResultBg>
        <S.ComResultBtnContainer>
          <S.ComResultBtn> 개표 완료</S.ComResultBtn>
        </S.ComResultBtnContainer>
        <S.ComResultTitle style={{ whiteSpace: 'pre-line' }}>
          {data.title}
        </S.ComResultTitle>

        {/*그래프*/}

        <S.GraphWrapper>
          {/*좋은 것 같아 그래프*/}
          <S.Graph>
            <div
              className={`bar good ${
                data.option1_count === maxVoteCount ? 'max-vote' : ''
              }`}
              style={{ width: `${goodGraphWidth}rem` }}
            ></div>
            <S.Graphper
              style={{
                color:
                  data.option1_count === maxVoteCount ? 'black' : '#C0C5DC',
              }}
            >
              {data.option1_count}%
              <S.CircleIcon src={circleIconSrc1} />
            </S.Graphper>
            <S.GraphText
              style={{
                color:
                  data.option1_count === maxVoteCount ? 'white' : '#484A64',
              }}
            >
              좋은 것 같아
            </S.GraphText>
          </S.Graph>

          {/*별로인 것 같아 그래프*/}
          <S.Graph>
            <div
              className={`bar not-good ${
                data.option2_count === maxVoteCount ? 'max-vote' : ''
              }`}
              style={{ width: `${notGoodGraphWidth}rem` }}
            ></div>
            <S.Graphper
              style={{
                color:
                  data.option2_count === maxVoteCount ? 'black' : '#C0C5DC',
              }}
            >
              {data.option2_count}% <S.CircleIcon src={circleIconSrc2} />
            </S.Graphper>
            <S.GraphText
              style={{
                color:
                  data.option2_count === maxVoteCount ? 'white' : '#484A64',
              }}
            >
              난 별로,,
            </S.GraphText>
          </S.Graph>

          {/*잘 모르겠어 그래프*/}
          <S.Graph>
            <div
              className={`bar dont-know ${
                data.option3_count === maxVoteCount ? 'max-vote' : ''
              }`}
              style={{ width: `${dontKnowGraphWidth}rem` }}
            ></div>
            <S.Graphper
              style={{
                color:
                  data.option3_count === maxVoteCount ? 'black' : '#C0C5DC',
              }}
            >
              {data.option3_count}% <S.CircleIcon src={circleIconSrc3} />
            </S.Graphper>
            <S.GraphText
              style={{
                color:
                  data.option3_count === maxVoteCount ? 'white' : '#484A64',
              }}
            >
              잘 모르겠어
            </S.GraphText>
          </S.Graph>
          <S.ResultDate>{data.resultDate}</S.ResultDate>
        </S.GraphWrapper>
      </S.ComResultBg>
      <S.ResultLine>
        <S.ResultLineImg src='/Community/ResultDots.png' />
      </S.ResultLine>
      <S.ResultText style={{ whiteSpace: 'pre-line' }}>
        <span style={{ color: maxVotePercentageColor }}>
          {`${maxVotePercentage.toFixed(0)}%`}
        </span>
        의 사용자분들께서
        <br />
        <span style={{ color: maxVoteTextColor }}>"{maxVoteText}"</span>라고
        대답했어요
      </S.ResultText>
      <S.ResultTextSub>
        유저들이 이와 같은 반응을 보인 이유는 무엇일까요? <br />
        다음 워드 클라우드를 통해 유저들이 어떤 생각을 가지고 있는지 분석해봐요!
      </S.ResultTextSub>
      <S.ResultCloud>
        <S.ResultCloudImg src={wordcloudImage} alt='Word Cloud' />
      </S.ResultCloud>
      <S.ResultLine>
        <S.ResultLineImg src='/Community/ResultDots.png' />
      </S.ResultLine>
    </S.ComResultWrapper>
  );
}

export default ComResult;
