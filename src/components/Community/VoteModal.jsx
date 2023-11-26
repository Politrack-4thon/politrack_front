import React, { useEffect, useState } from 'react';
import * as S from './style';

function VoteModal({ onClose }) {
  return (
    <S.VoteModalWrapper>
      <S.VoteModalBg>
        <S.VoteModalTitle>참여해주셔서 감사합니다.</S.VoteModalTitle>
        <S.VoteModalSub>
          여러분의 소중한 의견을 모아 전달해드릴게요!
        </S.VoteModalSub>
        {/* <S.VoteModalBtn onClick={onClose}>확인</S.VoteModalBtn> */}
      </S.VoteModalBg>
    </S.VoteModalWrapper>
  );
}

export default VoteModal;
