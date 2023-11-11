import React, { useState } from 'react';
import { API } from '../../api/axois';
import * as S from '../Community/style';
import VoteModal from './VoteModal';

function ComDetailForm({ community }) {
  const [userInput, setUserInput] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFormSubmit = () => {
    if (userInput.trim() === '') {
      return;
    }

    const postData = {
      comment: userInput,
      community: community,
    };

    API.post('/politician/opinion/', postData)
      .then((response) => {
        console.log('댓글이 성공적으로 제출되었습니다.', response.data);
        setShowModal(true); // 모달을 표시
      })
      .catch((error) => {
        console.error('댓글 제출 중 오류가 발생했습니다.', error);
      });
  };

  const isButtonActive = userInput.trim() !== ''; // 사용자 입력이 있는지 확인

  const handleCloseModal = () => {
    setShowModal(false); // 모달을 닫음
  };

  return (
    <S.FormWrapper>
      <S.FormBg
        placeholder='여기에 의견을 입력하세요...'
        as='textarea'
        onChange={handleInputChange}
      ></S.FormBg>
      <S.FormBtn
        onClick={handleFormSubmit}
        disabled={!isButtonActive} // 입력이 없으면 버튼 비활성화
        style={{
          backgroundColor: isButtonActive ? '#484A64' : '#EBEDF8',
          color: isButtonActive ? 'white' : '#C0C5DC',
        }} // 활성화 상태에 따라 배경색 변경
      >
        작성 완료
      </S.FormBtn>
      {showModal && <VoteModal isOpen={showModal} onClose={handleCloseModal} />}
    </S.FormWrapper>
  );
}

export default ComDetailForm;
