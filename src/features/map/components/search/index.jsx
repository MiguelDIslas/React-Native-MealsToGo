import { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "./styles";
import { LocationContext } from "../../../../services";

const Search = () => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={"map"}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
