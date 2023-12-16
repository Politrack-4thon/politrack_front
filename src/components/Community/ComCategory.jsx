import React from 'react';
import * as S from '../Community/style';

const comCategories = [
    {id:0, text:"전체", url:' '},
    {id:1, text:"과학", url:'과학'},
    {id:2, text:"경제", url:'경제'},
    {id:3, text:"사회", url:'사회'},
    {id:4, text:"문화", url:'문화'},
    {id:5, text:"기술", url:'기술'},
    {id:6, text:"행정", url:'행정'},
    {id:7, text:"행정", url:'행정'},
    {id:8, text:"행정", url:'행정'},
    {id:9, text:"행정", url:'행정'},
]
  
const ComCategory = ({ onSelect, category}) => {
    return (
        <S.ComCategroyContainer>
          {comCategories.map(v => (
            <S.ComCategory
                key={v.url}
                active={category === v.url}
                onClick={()=>onSelect(v.url)}
            >
              {v.text}
            </S.ComCategory>
          ))}
        </S.ComCategroyContainer>

    );
}

export default ComCategory;