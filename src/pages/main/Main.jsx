import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

function Main() {
  return (
    <S.MainWrapper>
      <S.MainTitle>4호선톤 ㄱㅂㅈㄱ</S.MainTitle>
      {/* 추후 삭제예정 */}
      <S.MainSection>
        <Link to='/PMain'>
          <S.MainSectionButton>정치인 카드 디테일</S.MainSectionButton>
        </Link>
        <Link to='/SignUp'>
          <S.MainSectionButton>로그인 및 회원가입</S.MainSectionButton>
        </Link>
        <Link to='/community'>
          <S.MainSectionButton>커뮤니티</S.MainSectionButton>
        </Link>
        <Link to='/quiz'>
          <S.MainSectionButton>퀴즈</S.MainSectionButton>
        </Link>
      </S.MainSection>
    </S.MainWrapper>
  );
}

export default Main;
