import React, { useState, useEffect } from 'react';
import { API } from '../../api/axois';
import * as S from '../Community/style';
import VoteModal from './VoteModal';

function ComDetailForm({
  selectedVote,
  setComment,
  disabled,
  showModal,
  ...props
}) {
  useEffect(() => {
    // console.log('Selected Vote changed to:', selectedVote);
  }, [selectedVote]);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <S.FormWrapper>
      <S.FormBg
        placeholder='여기에 의견을 입력하세요...'
        as='textarea'
        onChange={handleInputChange}
        disabled={disabled}
      ></S.FormBg>
      {showModal && <VoteModal />}
    </S.FormWrapper>
  );
}

export default ComDetailForm;
