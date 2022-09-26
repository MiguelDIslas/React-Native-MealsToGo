import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { RestaurantList } from "./styles";
import { RestaurantInfoCard, Search } from "../../components";
import {
  Spacer,
  SafeArea,
  Loading,
  FavouritesBar,
} from "../../../../components";
import { RestaurantsContext, FavouritesContext } from "../../../../services";

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && <Loading />}

      <Search isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />

      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restaurants}
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
  );
};

export default RestaurantsScreen;
