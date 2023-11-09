import { styled } from 'styled-components';

export const QuizWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
  margin-bottom: 100px;
  position:relative;
`;
