import { styled } from 'styled-components';

export const DetailWrapper = styled.div`
  flex-grow: 1;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
`;
