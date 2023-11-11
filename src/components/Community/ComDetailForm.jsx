import React, { useState } from 'react';
import { API } from '../../api/axois';
import * as S from '../Community/style';
import VoteModal from './VoteModal';

function ComDetailForm({ community, comment, setComment }) {
  const [userInput, setUserInput] = useState(comment); // 초기값으로 comment 사용
  const [isEditMode, setIsEditMode] = useState(false);
  const [previousUserInput, setPreviousUserInput] = useState(comment || '');
  const [showModal, setShowModal] = useState(false);
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
    // 입력된 데이터가 없거나 수정 모드인 경우, 요청을 보내지 않음
    if (userInput.trim() === '' || isEditMode) {
      return;
    }

    const postData = {
      comment: userInput,
      community: community,
    };

    API.post('/politician/opinion/', postData)
      .then((response) => {
        console.log('댓글이 성공적으로 제출되었습니다.', response.data);
        setComment(response.data.comment);
        setShowModal(true); // 모달 표시
        setIsEditMode(true); // 수정 모드 설정
      })
      .catch((error) => {
        console.error('댓글 제출 중 오류가 발생했습니다.', error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <S.FormWrapper>
      <S.FormBg
        placeholder={placeholderText}
        style={{ ...inputStyle, whiteSpace: 'pre-line' }}
        as='textarea'
        onChange={handleInputChange}
        disabled={isEditMode} // 수정 모드일 때 입력 비활성화
      ></S.FormBg>
      <S.FormBtn style={buttonStyle} onClick={handleFormSubmit}>
        {isEditMode ? '수정 완료' : '작성 완료'}
      </S.FormBtn>
      <VoteModal isOpen={showModal} onClose={handleCloseModal} />
    </S.FormWrapper>
  );
}

export default ComDetailForm;
