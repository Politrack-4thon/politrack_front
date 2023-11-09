import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';

const BoldText = styled.span`
  font-weight: 700;
`;

function IntroFirst() {
  const handleLogiMove = () => {
    // 로그인 페이지로 이동
    navigate('/Signin');
  };
  return (
    <S.IntroFirstWhole>
      <S.IntroFirstWrapper>
        <S.IntroLogoContainer>
          <S.IntroLogo src='/Intro/IntroLogo.png' />
          <S.IntroLogoTitle src='/Intro/IntroLogoTitle.png' />
        </S.IntroLogoContainer>
        <S.IntroDes>
          반가워요! <br />
          올바른 정치를 위한 한걸음 <BoldText>“폴리트랙”</BoldText> 입니다{' '}
          <br /> 서비스를 시작해볼까요?
        </S.IntroDes>
        <Link to={`/PMain`}>
          <S.IntroBtnContainer>
            <S.IntroBtn>서비스 시작하기</S.IntroBtn>
          </S.IntroBtnContainer>
        </Link>
        <S.LoginContainer>
          <S.SignupMoveMain onClick={handleLogiMove}>
            로그인 하러가기
          </S.SignupMoveMain>
        </S.LoginContainer>
      </S.IntroFirstWrapper>
    </S.IntroFirstWhole>
  );
}

export default IntroFirst;
