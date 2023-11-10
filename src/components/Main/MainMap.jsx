import React from "react";
import { useEffect } from "react";

import * as S from "./style";

export default function MainMap() {
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await API.get('/politician/orig/<str:orig_nm>');
            setData(response.data); // data값들 상태 값 변경
    
            if (response.status === 200) {
              const data = response.data;
              setCommunityContents(data);
            } else {
              console.error(
                'Error fetching community content:',
                response.statusText
              );
            }
          } catch (error) {
            console.error('Error fetching community content:', error);
            setData ({
              POLY_NM : '더불어민주당', // 정당명
              HG_NM: '김철수', // 한글 이름
              ENG_NM:'KIM CHUL SU', // 영어 이름
              ORIG_NM:'중구 성동구 갑', // 선거구명
              HOMEPAGE:'#', // 홈페이지 링크
            })
          }
        }
    
        fetchData();
      }, []);
        return ( 
    <S.MainMap>
        <img src="C:\Users\User\OneDrive\바탕 화면\politrack_front\public\Community\map.png">


        </img>
        
        

    </S.MainMap>
    );
}