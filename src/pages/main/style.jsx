import { styled } from 'styled-components';

export const MainWrapper = styled.div`
  flex-grow: 1;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.font};
`;

export const MainTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 10rem;
`;

export const MainSection = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

export const MainSectionButton = styled.div`
  max-width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
