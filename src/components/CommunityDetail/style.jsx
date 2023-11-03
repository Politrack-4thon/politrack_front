import { styled } from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const ContentBg = styled.div`
  width: 90%;
  border-radius: 8px;
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  margin-top: 15px;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  font-size: 14px;
  font-family: 'NotoSansMedium';
  font-weight: 700;
  display: flex;
`;

export const ContentText = styled.div`
  font-size: 10px;
  font-family: 'NotoSansRegular';
  font-weight: 400;
  line-height: 17.5px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
`;

//ComDetailCard.jsx

export const ComDetailCardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Cardbg = styled.div`
  width: 90%;
  height: 120px;
  background-color: white;
  border-radius: 8px;
  margin-top: 25px;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CardChar = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 16px;
  margin-left: 10px;
  margin-right: 15px;
`;

export const CardCharImg = styled.img``;

export const CardTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-family: 'NotoSansMedium';
`;

export const CardContent = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 10px;
  line-height: 17.85px;
  font-weight: 300;
  margin-top: 10px;
`;
