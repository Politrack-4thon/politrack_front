import React from "react";
import * as S from "./style";


function MainSearch() {
    // searchSpace=(event)=>{
    //     let keyword = event.target.value;
    //     this.setState({search:keyword})
    //   }

    
    return (
        <S.SearchContainer>
            <S.SearchInput>
                <S.Input type="text" placeholder="국회의원 이름을 검색해주세요"/>
            </S.SearchInput>
            <S.SearchButton>
                <img src="/src/assets/images/search.svg"/>
            </S.SearchButton>
        </S.SearchContainer>
    );
}

export default MainSearch;