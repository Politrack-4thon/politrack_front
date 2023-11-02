import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.Logo>
        <S.LogoImg src='/Header/Logo.png' />
      </S.Logo>
    </S.HeaderWrapper>
  );
}

export default Header;
