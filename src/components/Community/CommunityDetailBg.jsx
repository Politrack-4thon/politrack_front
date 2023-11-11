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
        <ComDetailCard idea={comDetailA} ideaDes={comDetailADes} />
        <ComDetailCard idea={comDetailB} ideaDes={comDetailBDes} />
        <ComDetailCard idea={comDetailC} ideaDes={comDetailCDes} />
      </S.DetailWallpaper>
    </S.DetailBgWrapper>
  );
}

export default CommunityDetailBg;
