import { styled } from 'styled-components';

export const LoginWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const SignupWhole = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  margin-top: 30px;
  overflow: hidden;
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

export const SignUpInputWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpInput = styled.input`
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 5px;
  width: 70%;
  ::placeholder {
    color: #aeafb9;
  }

  border: ${(props) =>
    props.isvaild == 'true' ? '1px solid #484A64' : '1px solid #FF5151'};
`;

export const MessageText = styled.span`
  color: ${(props) => (props.isvaild == 'true' ? '#484A64' : '#FF5151')};
  font-size: 13px;
  position: relative;
  top: -20px;
  width: 100%;
  margin-left: 90px;
`;

export const SignUpInputContainer = styled.form`
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
