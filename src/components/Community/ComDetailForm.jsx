import React, { useState } from 'react';
import { API } from '../../api/axois';
import * as S from '../Community/style';

function ComDetailForm({ user, board, comment, setComment }) {
  const [userInput, setUserInput] = useState(comment || '');
  const [isEditMode, setIsEditMode] = useState(false);
  const [previousUserInput, setPreviousUserInput] = useState(comment || '');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const placeholderText = `위의 내용을 읽고 여러분은 어떻게 생각하는지 자유롭게 의견을 남겨주세요.
폴리트랙이 여러분의 생각을 모아 정리해드릴게요`;

  const inputStyle = {
    border: 'none',
    outline: 'none',
  };

  //백엔드 통신 후 색상 변경 확인 필요
  const buttonStyle = {
    backgroundColor: isEditMode
      ? '#EBEDF8'
      : userInput.trim() === ''
      ? '#EBEDF8'
      : previousUserInput !== userInput
      ? '#484A64'
      : '#EBEDF8',
    color: isEditMode
      ? '#C0C5DC'
      : userInput.trim() === ''
      ? '#C0C5DC'
      : previousUserInput !== userInput
      ? 'white'
      : '#C0C5DC',
  };

  const handleFormSubmit = () => {
    if (isEditMode || userInput.trim() === '') {
      // 수정 모드이거나 userInput이 빈 문자열인 경우 처리하지 않음
      return;
    }

    if (isEditMode) {
      // 수정 모드에서 수정 완료 버튼을 누른 경우
      API.patch('https://example.com/api/update-comment', {
        user: user,
        board: board,
        comment: userInput,
      })
        .then((response) => {
          console.log('댓글이 성공적으로 수정되었습니다.', response.data);
          setComment(response.data.comment);
          setIsEditMode(false);
          setPreviousUserInput(userInput);
        })
        .catch((error) => {
          console.error('댓글 수정 중 오류가 발생했습니다.', error);
          setIsEditMode(true);
          setPreviousUserInput(userInput);
        });
      console.log('수정 완료 버튼 클릭');
    } else {
      // 작성 완료 버튼을 누른 경우
      API.post('https://example.com/api/submit-comment', {
        user: user,
        board: board,
        comment: userInput,
      })
        .then((response) => {
          console.log('댓글이 성공적으로 제출되었습니다.', response.data);
          setComment(response.data.comment);
          setIsEditMode(true);
          setPreviousUserInput(userInput);
        })
        .catch((error) => {
          console.error('댓글 제출 중 오류가 발생했습니다.', error);
          setIsEditMode(true);
          setPreviousUserInput(userInput);
        });
      console.log('작성 완료 버튼 클릭');
    }
  };

  return (
    <S.FormWrapper>
      <S.FormBg
        placeholder={placeholderText}
        style={{ ...inputStyle, whiteSpace: 'pre-line' }}
        as='textarea'
        onChange={handleInputChange}
      ></S.FormBg>
      <S.FormBtn style={buttonStyle} onClick={handleFormSubmit}>
        {isEditMode ? '수정 완료' : '작성 완료'}
      </S.FormBtn>
    </S.FormWrapper>
  );
}

export default ComDetailForm;
