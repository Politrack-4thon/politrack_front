import styled from 'styled-components';

export const SigninForm = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 10%;
  position: relative;
`;

export const SigninWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  margin-top: 30px;
  overflow: hidden;
  align-items: center;
`;

export const SignInInputWrapper = styled.form`
  width: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-left: 75px;
  margin-top: 10px;
`;

export const LoginTitleWrapper = styled.div`
  width: 100%;
`;

export const LoginTitle = styled.div`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'NotoSansMedium';
  margin-left: 40px;
  margin-bottom: 50px;
`;

export const InputTitle = styled.div`
  width: 100%;
  margin-left: 90px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'NotoSansMedium';
`;

export const SignupMove = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SignupMoveSub = styled.div`
  margin-right: 10px;
  color: #7f85a3;
  font-size: 14px;
  font-weight: 700;
  font-family: 'NotoSansRegular';
`;
export const SignupMoveMain = styled.div`
  color: black;
  font-size: 14px;
  font-weight: 700;
  font-family: 'NotoSansRegular';
  cursor: pointer;
  &:hover {
    font-size: 16px;
  }
`;

export const LoginButton = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 80px;
`;
