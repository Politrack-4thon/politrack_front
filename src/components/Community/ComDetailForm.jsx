import React, { useState, useEffect } from 'react';
import { API } from '../../api/axois';
import * as S from '../Community/style';

function ComDetailForm({ selectedVote, setComment, disabled, ...props }) {
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
    </S.FormWrapper>
  );
}

export default ComDetailForm;
