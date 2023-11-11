import React from 'react';
import * as S from '../Community/style';
import ComDetailTitle from '../CommunityDetail/ComDetailTitle';
import ComDetailCard from '../CommunityDetail/ComDetailCard';

function CommunityDetailBg({
  formattedDate,
  comDetailTitle,
  comDetailText,
  comDetailA,
  comDetailB,
  comDetailC,
  comDetailADes,
  comDetailBDes,
  comDetailCDes,
}) {
  // if (!detailData || !communityData) {
  //   return <div>Loading...</div>;
  // }

  return (
    <S.DetailBgWrapper>
      <S.DetailWallpaper>
        <S.ComDetailDate>{formattedDate}</S.ComDetailDate>

        <S.DetailTitle>
          <ComDetailTitle title={comDetailTitle} text={comDetailText} />
        </S.DetailTitle>
        <ComDetailCard idea={comDetailA} ideaDes={comDetailADes} img='/src/assets/images/emotion_green.svg'/>
        <ComDetailCard idea={comDetailB} ideaDes={comDetailBDes} img='/src/assets/images/emotion_red.svg'/>
        <ComDetailCard idea={comDetailC} ideaDes={comDetailCDes} img='/src/assets/images/emotion_blue.svg'/>
      </S.DetailWallpaper>
    </S.DetailBgWrapper>
  );
}

export default CommunityDetailBg;
