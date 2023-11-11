// MainSearch.js
import React, { useState } from "react";
import * as S from "./style";

const MainSearch = ({ onSearch }) => {
    const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    // Call the onSearch prop with the search value
    onSearch(search);
  };

  return (
    <S.SearchContainer>
      <S.SearchInput>
        <S.Input
          type="text"
          placeholder="국회의원 이름을 검색해주세요"
          value={search}
          onChange={handleInputChange}
        />
      </S.SearchInput>
      <S.SearchButton>
        <img src="/src/assets/images/search.svg" alt="Search" onClick={handleSearchClick} />
      </S.SearchButton>
    </S.SearchContainer>
  );
};

export default MainSearch;
