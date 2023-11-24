import React, { useEffect, useState } from 'react';
import * as S from './style';

function ResultCommon() {
  return (
    <S.ResultCommonWrapper>
      <S.ResultCommonCard>
        <S.ResultCommonText>
          “김포시를 서울로 편입하면 행정구역과 생활권을 일치시켜 주민 삶의 질을
          올릴 수 있지 않을까요?”
        </S.ResultCommonText>
      </S.ResultCommonCard>
    </S.ResultCommonWrapper>
  );
}

export default ResultCommon;
