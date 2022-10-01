import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../../services";
import { RestaurantList } from "../../components/restaurant-list";
import { SafeArea, Text, Spacer } from "../../../../components";
import { FavouritesArea } from "./styles";
import { RestaurantInfoCard } from "../../../restaurants/components";

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", {
                restaurant: item,
              })
            }
          >
            <Spacer position={"bottom"} size={"large"}>
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <FavouritesArea>
      <Text center>No Favourites yet</Text>
    </FavouritesArea>
  );
};

export default FavouritesScreen;
