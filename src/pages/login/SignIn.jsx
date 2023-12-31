import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LoginInputComponent,
  LoginButton,
} from '../../components/Login/LoginForm';
import * as S from './In_Style';
import { API } from '../../api/axois';

function Signin() {
  const [user, setUser] = useState({
    user_id: '',
    password: '',
  });

  const handleLogiMove = () => {
    // 로그인 페이지로 이동
    navigate('/SignUp');
  };

  const [jwtToken, setJwtToken] = useState(null); // JWT 토큰 상태 추가
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedJwtToken = localStorage.getItem('jwtToken');
    if (storedJwtToken) {
      setJwtToken(storedJwtToken);
    }
  }, []);

  // 유효성 검증 위함
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 모든 필수 칸이 입력되었는지 확인
    if (user.user_id && user.password) {
      // 수정: 기존의 loginData 대신 user를 사용합니다.
    }
  };

  const handlePw = (e) => {
    const password = e.target.value; // 변수명을 password로 수정
    setPw(password);
    setUser({ ...user, password: password });
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

    try {
      const response = await API.post('/user/login/', {
        password: user.password,
        user_id: user.user_id,
      });

      if (response.status === 200) {
        // 서버에서 받은 토큰 데이터
        const { access, refresh } = response.data.token;

        // access와 refresh 토큰을 로컬 스토리지에 저장
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);

        // 로그인 성공 시 사용자 ID를 localStorage에 저장
        localStorage.setItem('user_id', user.user_id);

        navigate('/PMain', { state: { user_id: user.user_id } });
      } else {
        // 로그인 실패 처리
        alert('아이디나 비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      // 오류 처리
      console.error('로그인 오류:', error);
      alert('서버에서 오류가 발생했습니다. 나중에 다시 시도하세요.');
    }
  };

  return (
    <S.SigninWrapper>
      <S.SigninForm onSubmit={handleSubmit}>
        <S.LoginTitleWrapper>
          <S.LoginTitle>로그인</S.LoginTitle>
        </S.LoginTitleWrapper>
        <S.InputTitle>아이디</S.InputTitle>
        <S.SignInInputWrapper>
          <LoginInputComponent
            required
            type='text'
            onChange={(e) => setUser({ ...user, user_id: e.target.value })}
            placeholder='아이디를 입력하세요'
            isvaild='true'
            value={user.user_id}
            name='user_id'
            width='80%'
            height='40px'
          />
        </S.SignInInputWrapper>
        <S.InputTitle>비밀번호</S.InputTitle>
        <S.SignInInputWrapper>
          <LoginInputComponent
            type='password'
            onChange={handlePw}
            placeholder='비밀번호를 입력하세요'
            isvaild='true'
            value={user.password}
            name='password'
            handleLoginClick={handleLoginClick}
            required
            width='80%'
            height='40px'
          />
        </S.SignInInputWrapper>
      </S.SigninForm>
      <S.LoginButton>
        <LoginButton
          type='submit'
          onClick={handleLoginClick}
          buttonText='로그인'
        />
      </S.LoginButton>
      <S.SignupMove>
        <S.SignupMoveSub>아직 회원이 아니신가요?</S.SignupMoveSub>
        <S.SignupMoveMain onClick={handleLogiMove}>
          회원가입 하러가기
        </S.SignupMoveMain>
      </S.SignupMove>
    </S.SigninWrapper>
  );
}

export default Signin;
