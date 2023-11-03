import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  return (
    <S.HeaderWrapper>
      <Link to={``}>
        <S.Logo>
          <S.LogoImg src='/Header/Logo.png' />
        </S.Logo>
      </Link>
    </S.HeaderWrapper>
  );
}

export default Header;
