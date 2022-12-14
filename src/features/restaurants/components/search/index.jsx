import { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { SearchContainer } from "./styles";
import { LocationContext, FavouritesContext } from "../../../../services";

const Search = ({ isToggled, onToggle }) => {
  const { search, keyword } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isToggled ? "heart" : "heart-outline"}
        onIconPress={onToggle}
        placeholder="Search for a location"
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
