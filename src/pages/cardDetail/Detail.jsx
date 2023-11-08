import { useParams } from "react-router-dom"

import MainVoteInfo from "../../components/Main/MainVoteInfo";
import MainSubTitle from "../../components/Main/MainSubTitle";

import * as S from '../../components/Main/style'
import * as R from './style';

function Detail(props) {
  const params = useParams();
  const {homeLogoUrl, instagramLogoUrl } = props;
  return (

    <div style ={{width:'100%'}}>
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
        <div>
            <R.cardDetailRow style={{gap: '16px'}}>
                <MainVoteInfo 
                  icon="/src/assets/images/icon1.svg"
                  title="당선횟수"
                  value="3선"
                />
                <S.MainVoteInfoContainer style={{width: '226.9px', height: '83px'}}>
                    <S.IconAndTitle>
                        <img src=''/>
                        소속위원회
                    </S.IconAndTitle>
                    <S.Val>문홫ㅇ리ㅏㅇ</S.Val>
                </S.MainVoteInfoContainer>
            </R.cardDetailRow>
            <MainSubTitle title="국회의원 약력"/>
            <R.cardDetailSummary>dfsdfsdfsdfsdf</R.cardDetailSummary>
            <MainSubTitle title="최근 발의 법안"/>
            <R.cardDetailBill>
                특정강력범죄의 처벌에 관한
                <R.billDetailBtn>상세보기</R.billDetailBtn>
            </R.cardDetailBill>

        </div>    
    </div>
    )


}


export default Detail;