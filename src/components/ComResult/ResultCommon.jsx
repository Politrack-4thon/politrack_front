import React from 'react';
import * as S from './style';

function ResultCommon({ opinionData }) {
  if (!opinionData) {
    // opinionData가 없는 경우 아무것도 표시하지 않음
    return (
      <S.NoneResultCommonWrapper>
        <S.NoneResultCommonText>
          {/* 잠시만 기다려주세요! <br /> 관리자가 의견을 정리하는 중이에요 :) */}
          과학의 발전도 좋지만 윤리적인 문제와 특히 사고가 나면 누가 어떻게
          책임질 것인지에 대한 법적 기준도 고려해야 해요!
        </S.NoneResultCommonText>
        <S.NoneResultCommonText>
          {/* 잠시만 기다려주세요! <br /> 관리자가 의견을 정리하는 중이에요 :) */}
          과학의 발전도 좋지만 윤리적인 문제와 특히 사고가 나면 누가 어떻게
          책임질 것인지에 대한 법적 기준도 고려해야 해요!
        </S.NoneResultCommonText>
      </S.NoneResultCommonWrapper>
    );
  }

  // 의견 데이터의 배열을 생성
  const opinions = [
    opinionData.opinionresult_a,
    opinionData.opinionresult_b,
    opinionData.opinionresult_c,
    opinionData.opinionresult_d,
    opinionData.opinionresult_e,
  ].filter(Boolean); // undefined 또는 빈 값이 아닌 항목만 필터링

  return (
    <S.ResultCommonWrapper>
      {opinions.map((opinion, index) => (
        <S.ResultCommonCard key={index}>
          <S.ResultCommonText>{opinion}</S.ResultCommonText>
        </S.ResultCommonCard>
      ))}
    </S.ResultCommonWrapper>
  );
}

export default ResultCommon;
