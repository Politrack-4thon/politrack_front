import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import {
  LoginInputComponent,
  LoginButton,
} from '../../components/Login/LoginForm';
import { API } from '../../api/axois';

function Signup() {
  const [user, setUser] = useState({
    user_id: '',
    password: '',
    nickname: '',
  });
  const [pw, setPw] = useState('');
  const [pwMatchMessage, setPwMatchMessage] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [isAvailableId, setIsAvailableId] = useState(null);

  const handleLogiMove = () => {
    // 로그인 페이지로 이동
    navigate('/SignIn');
  };

  // const checkDuplicateId = async (userId) => {
  //   try {
  //     const response = await API.get(
  //       `/api/auth/checkDuplicateId?user_id=${userId}`
  //     );
  //     setIsAvailableId(!response.data.isDuplicate);
  //   } catch (error) {
  //     console.error('아이디 중복 확인 오류:', error);
  //   }
  // };

  const navigate = useNavigate();

  const handlePw = (e) => {
    const password = e.target.value;
    setPw(password);
    setUser({ ...user, password: password });
  };

  const handleConfirmPw = (e) => {
    e.preventDefault();
    const confirmPw = e.target.value;
    setConfirmPw(confirmPw);

    if (confirmPw !== user.password) {
      setPwMatchMessage('비밀번호를 다시 확인해주세요!');
    } else {
      setPwMatchMessage('확인 완료되었습니다 :)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 모든 칸이 입력되었는가
    if (user.user_id && user.password && confirmPw) {
      // 비밀번호 재입력
      if (user.password !== confirmPw) {
        setPwMatchMessage('비밀번호를 다시 확인해주세요!');
        return;
      }
    }
  };

  const handleLoginClick = async () => {
    if (user.user_id === '') {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (user.password === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    if (confirmPw === '') {
      alert('비밀번호를 다시 한번 입력해주세요.');
      return;
    }

    try {
      const response = await API.post('/user/signin', {
        // 백엔드로 보낼 데이터
        password: user.password,
        user_id: user.user_id,
        confirm_password: confirmPw,
      });

      if (response.status === 200) {
        alert('회원가입이 완료되었습니다.');
        navigate('/Main');
      } else {
        alert('회원가입에 실패했다네.');
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <S.SignupWhole>
      <S.SignUpInputContainer onSubmit={handleSubmit}>
        <S.LoginTitleWrapper>
          <S.LoginTitle>회원가입</S.LoginTitle>
        </S.LoginTitleWrapper>
        <S.InputTitle>아이디</S.InputTitle>
        <S.SignUpInputWrapper>
          <LoginInputComponent
            required
            placeholder='아이디를 입력해주세요.'
            type='text'
            name='user_id'
            onChange={(e) => {
              const userId = e.target.value;
              setUser({ ...user, user_id: userId });
              // if (userId) {
              //   checkDuplicateId(userId);
              // } else {
              //   setIsAvailableId(null);
              // }
            }}
            value={user.user_id}
            // onBlur={() => checkDuplicateId(user.user_id)}
            isvaild={
              isAvailableId === true
                ? 'true'
                : isAvailableId === false
                ? 'false'
                : 'true'
            }
            width='80%'
            height='40px'
          />
          {isAvailableId === true && (
            <S.MessageText isvaild='true'>
              사용 가능한 아이디입니다.
            </S.MessageText>
          )}
          {isAvailableId === false && (
            <S.MessageText isvaild='false'>중복된 아이디입니다.</S.MessageText>
          )}
        </S.SignUpInputWrapper>

        <S.InputTitle>비밀번호</S.InputTitle>
        <S.SignUpInputWrapper>
          <LoginInputComponent
            required
            placeholder='사용하실 비밀번호를 입력해주세요'
            type='password'
            name='password'
            onChange={handlePw}
            value={user.password}
            isvaild='true'
            autocomplete='new-password'
            width='80%'
            height='40px'
            handleLoginClick={handleLoginClick}
          />
        </S.SignUpInputWrapper>

        <S.InputTitle>비밀번호 확인</S.InputTitle>
        <S.SignUpInputWrapper>
          <LoginInputComponent
            required
            placeholder='비밀번호를 다시 한번 입력해주세요'
            type='password'
            name='confirmPw'
            onChange={handleConfirmPw}
            value={confirmPw}
            isvaild={user.password === confirmPw ? 'true' : 'false'}
            autocomplete='new-password'
            width='80%'
            height='40px'
          />
          {confirmPw ? (
            user.password === confirmPw ? (
              <S.MessageText isvaild='true'>
                비밀번호가 일치합니다.
              </S.MessageText>
            ) : (
              <S.MessageText isvaild='false'>
                잘못된 비밀번호입니다.
              </S.MessageText>
            )
          ) : (
            ''
          )}
        </S.SignUpInputWrapper>

        <LoginButton
          type='submit'
          onClick={handleLoginClick}
          buttonText='회원가입 완료하기'
        />
      </S.SignUpInputContainer>
      <S.SignupMove>
        <S.SignupMoveSub>이미 회원이신가요?</S.SignupMoveSub>
        <S.SignupMoveMain onClick={handleLogiMove}>
          로그인 하러가기
        </S.SignupMoveMain>
      </S.SignupMove>
    </S.SignupWhole>
  );
}

export default Signup;
