import React from 'react';
import * as S from './style';
import insta from '../../../assets/images/footer_insta.png';
import github from '../../../assets/images/footer_github.png';

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterLine>
        <S.Line />
      </S.FooterLine>
      <S.FooterDguEng>@Likelion. All rights Reserved.</S.FooterDguEng>
      <S.FooterDguKor>4호선톤 000</S.FooterDguKor>
      <S.FooterLogo>
        <a
          href='https://www.instagram.com/line4thon/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <S.FooterInsta src={insta} alt='Instagram' />
        </a>
        <a
          href='https://github.com/orgs/Politrack-4thon/repositories'
          target='_blank'
          rel='noopener noreferrer'
        >
          <S.FooterGithub src={github} alt='GitHub' />
        </a>
      </S.FooterLogo>
    </S.FooterWrapper>
  );
}

export default Footer;
