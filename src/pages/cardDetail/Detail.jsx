import { useParams } from "react-router-dom"
import * as S from "../../components/Main/style";



function Detail(props) {
  const params = useParams();
  const {homeLogoUrl, instagramLogoUrl } = props;
  return (
      <S.MainCardContainer style={{width: '100%', height: '429px'}}>
              <S.MainCardImage style={{width: '150px', height: '150px'}}>
                  <img src='' alt="국회의원 이미지" />
              </S.MainCardImage>
          <S.MainCardParty style={{width: '163px', height: '40px'}}>{props.partyName}</S.MainCardParty>
          <S.MainCardName style={{fontSize:'20px'}}>{props.name}</S.MainCardName>
          <S.MainCardDistrict style={{fontSize:'12px'}}>{props.district}</S.MainCardDistrict>
          <S.MainCardUrl>
              <a href={homeLogoUrl} target="_blank" rel="noopener noreferrer">
                  <img src='\src\assets\images\card_home.svg' alt="Home Logo" />
              </a>
              <a href={instagramLogoUrl} target="_blank" rel="noopener noreferrer">
                  <img src='\src\assets\images\card_insta.svg' alt="Instagram Logo" />
              </a>
          </S.MainCardUrl>
      </S.MainCardContainer>
  );
}


export default Detail;