import React, { useEffect, useState } from 'react';
import * as S from './style';
import { API } from '../../api/axois';
import { useParams } from 'react-router-dom';

import CommunityQuestion from '../../components/Community/CommunityQuestion';
import CommunityTop from '../../components/Community/CommunityTop';

import circleIconImage from '/Community/VoteIconColor.png';
import circleIconNoImage from '/Community/VoteResultNo.png';
import ResultCommon from '../../components/ComResult/ResultCommon';

function ComResult() {
  const [data, setData] = useState({
    pick_title: '',
    option1_count: 0,
    option2_count: 0,
    option3_count: 0,
  });

  const [wordcloudGoodImage, setWordcloudGoodImage] = useState('');
  const [wordcloudBadImage, setWordcloudBadImage] = useState('');
  const [wordcloudSosoImage, setWordcloudSosoImage] = useState('');
  const [wordcloudGoodImageLoaded, setWordcloudGoodImageLoaded] =
    useState(false);
  const [wordcloudBadImageLoaded, setWordcloudBadImageLoaded] = useState(false);
  const [wordcloudSosoImageLoaded, setWordcloudSosoImageLoaded] =
    useState(false);

  const { community_id } = useParams();

  const [communityData, setCommunityData] = useState({
    title: '',
    content: '',
    formatted_created_at: '',
    formatted_deadline: '',
  });

  useEffect(() => {
    const fetchCommunityData = async () => {
      try {
        // Fetch the community data from the `/politician/community` endpoint
        const response = await API.get(`/politician/community`);
        const community = response.data.find(
          (item) => item.community_id === parseInt(community_id)
        );
        if (community) {
          // Update the community data state variable
          setCommunityData(community);
        }
      } catch (error) {
        console.error('Error fetching community data: ', error);
      }
    };

    fetchCommunityData();
  }, [community_id]);

  useEffect(() => {
    const fetchVoteData = async () => {
      try {
        const response = await API.get(
          `/politician/community/${community_id}/detail/result/`
        );
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생: ', error);
      }
    };

    fetchVoteData();
  }, [community_id]);

  const SERVER_URL = 'http://43.200.133.223';

  //좋은 것 같아! 라고 생각하는 사람들의 워드 클라우드 이미지 get해오기.
  useEffect(() => {
    const fetchWordcloudGoodImage = async () => {
      try {
        const response = await API.get(
          `/politician/community/${community_id}/wordcloudgood`,
          {
            responseType: 'arraybuffer', // 서버로부터 바이너리 데이터를 받기 위해 설정
          }
        );
        // Blob 객체 생성
        const blob = new Blob([response.data], { type: 'image/png' });
        // Blob 객체를 URL로 변환
        const imageSrc = URL.createObjectURL(blob);
        // 이미지 URL 설정
        setWordcloudGoodImage(imageSrc);
      } catch (error) {
        console.error('Error fetching image: ', error);
        // 에러 시 더미 이미지 설정
        setWordcloudGoodImage('/path/to/dummy/image.png');
      }
    };

    fetchWordcloudGoodImage();
  }, [community_id]);

  //나쁜 것 같아! 라고 생각하는 사람들의 워드 클라우드 이미지 get해오기.
  useEffect(() => {
    const fetchWordcloudBadImage = async () => {
      try {
        const response = await API.get(
          `/politician/community/${community_id}/wordcloudbad`,
          {
            responseType: 'arraybuffer', // 서버로부터 바이너리 데이터를 받기 위해 설정
          }
        );
        // Blob 객체 생성
        const blob = new Blob([response.data], { type: 'image/png' });
        // Blob 객체를 URL로 변환
        const imageSrc = URL.createObjectURL(blob);
        // 이미지 URL 설정
        setWordcloudBadImage(imageSrc);
      } catch (error) {
        console.error('Error fetching image: ', error);
        // 에러 시 더미 이미지 설정
        setWordcloudBadImage('/path/to/dummy/image.png');
      }
    };

    fetchWordcloudBadImage();
  }, [community_id]);

  //잘 모르겠어! 라고 생각하는 사람들의 워드 클라우드 이미지 get해오기.
  useEffect(() => {
    const fetchWordcloudSosoImage = async () => {
      try {
        const response = await API.get(
          `/politician/community/${community_id}/wordcloudsoso`,
          {
            responseType: 'arraybuffer', // 서버로부터 바이너리 데이터를 받기 위해 설정
          }
        );
        // Blob 객체 생성
        const blob = new Blob([response.data], { type: 'image/png' });
        // Blob 객체를 URL로 변환
        const imageSrc = URL.createObjectURL(blob);
        // 이미지 URL 설정
        setWordcloudSosoImage(imageSrc);
      } catch (error) {
        console.error('Error fetching image: ', error);
        // 에러 시 더미 이미지 설정
        setWordcloudSosoImage('/path/to/dummy/image.png');
      }
    };

    fetchWordcloudSosoImage();
  }, [community_id]);

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

  //의견 작성 정리

  const [opinionData, setOpinionData] = useState(null);

  useEffect(() => {
    const fetchOpinionData = async () => {
      try {
        const response = await API.get(
          `/politician/community/${community_id}/opinion/${community_id}`
        );
        if (response.status === 200) {
          setOpinionData(response.data);
        }
      } catch (error) {
        console.error('Error fetching opinion data:', error);
      }
    };

    fetchOpinionData();
  }, [community_id]);

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
          {communityData.title}
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
              좋은 것 같아!
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
          <S.ResultDate>
            {communityData.formatted_created_at} ~{' '}
            {communityData.formatted_deadline}
          </S.ResultDate>
        </S.GraphWrapper>
      </S.ComResultBg>
      <S.ResultLine>
        <S.ResultLineImg src='/Community/ResultDots.png' />
      </S.ResultLine>
      <S.ResultText style={{ whiteSpace: 'pre-line' }}>
        <span style={{ color: maxVotePercentageColor }}>
          {`${maxVoteCount}%`}
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

      {/* 좋은 것 같아를 선택한 사람의 워드 클라우드 */}
      <S.ResultTitle>
        <S.CardChar src='/src/assets/images/emotion_green.svg'></S.CardChar>
        <S.VoteResultContent>
          좋은 것 같아! 를 선택한 사람들의 의견이에요.
        </S.VoteResultContent>
      </S.ResultTitle>
      <S.ResultCloud>
        {wordcloudGoodImageLoaded ? (
          <S.ResultCloudImg src={wordcloudGoodImage} alt='Word Cloud' />
        ) : (
          <S.ResultNoneText>모아진 의견이 없어요 🥺</S.ResultNoneText>
        )}
      </S.ResultCloud>

      {/* 나쁜 것 같아를 선택한 사람의 워드 클라우드 */}
      <S.ResultTitle>
        <S.CardChar src='/src/assets/images/emotion_red.svg'></S.CardChar>
        <S.VoteResultContent>
          난 별로,, 를 선택한 사람들의 의견이에요.
        </S.VoteResultContent>
      </S.ResultTitle>
      <S.ResultCloud>
        {wordcloudBadImageLoaded ? (
          <S.ResultCloudImg src={wordcloudBadImage} alt='Word Cloud' />
        ) : (
          <S.ResultNoneText>모아진 의견이 없어요 🥺</S.ResultNoneText>
        )}
      </S.ResultCloud>

      {/* 잘 모르겠어를 선택한 사람의 워드 클라우드 */}
      <S.ResultTitle>
        <S.CardChar src='/src/assets/images/emotion_blue.svg'></S.CardChar>
        <S.VoteResultContent>
          잘 모르겠어 를 선택한 사람들의 의견이에요.
        </S.VoteResultContent>
      </S.ResultTitle>
      <S.ResultCloud>
        {wordcloudSosoImageLoaded ? (
          <S.ResultCloudImg src={wordcloudSosoImage} alt='Word Cloud' />
        ) : (
          <S.ResultNoneText>모아진 의견이 없어요 🥺</S.ResultNoneText>
        )}
      </S.ResultCloud>

      <CommunityQuestion
        subQuestion={'다들 어떻게 생각했을까요?'}
        mainQuestion={'공통적으로 생각한 의견들이에요.'}
      />
      <ResultCommon />
      {opinionData && <ResultCommon opinionData={opinionData} />}

      <S.ResultLine>
        <S.ResultLineImg src='/Community/ResultDots.png' />
      </S.ResultLine>
    </S.ComResultWrapper>
  );
}

export default ComResult;
