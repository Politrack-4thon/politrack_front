import styled from 'styled-components';

export const LoginWrapper = styled.div``;

export const LoginTitle = styled.div`
  margin-top: 50px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'NotoSansMedium';
  margin-left: 20px;
`;

//LoginForm.jsx

export const LoginInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 10px;
  padding-left: 15px;
  margin-bottom: 35px;
  background-color: #f6f7fe;
  border: ${(props) => (props.isvaild === 'true' ? 'none' : '1px solid red')};

  &::placeholder {
    color: #c0c5dc;
    font-size: 12px;
    font-weight: 500;
    font-family: 'NotoSansRegular';
  }
`;

export const StyledLoginButton = styled.button`
  background-color: black;
  display: flex;
  justify-content: center;
  color: white;
  width: 80%;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  margin-top: 130px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'NotoSansRegular';
  &:hover {
    box-shadow: 0 0 5px rgba(25, 33, 48, 0.6);
    outline: none;
  }
`;
