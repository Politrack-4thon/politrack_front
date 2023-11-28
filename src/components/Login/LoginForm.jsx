// LoginForm.jsx
import React from 'react';
import * as S from './style';

export function LoginInputComponent({
  placeholder,
  type,
  name,
  onChange,
  value,
  isvaild,
  width,
  height,
}) {
  return (
    <S.LoginInput
      required
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      isvaild={isvaild}
      width={width}
      height={height}
      autoComplete={type === 'password' ? 'off' : 'on'} // 비밀번호 필드일 경우 자동 완성 비활성화
    />
  );
}

export function LoginButton({ buttonText, onClick }) {
  return (
    <S.StyledLoginButton onClick={onClick}>{buttonText}</S.StyledLoginButton>
  );
}
