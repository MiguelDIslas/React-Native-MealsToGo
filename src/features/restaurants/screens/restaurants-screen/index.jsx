import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { RestaurantList } from "./styles";
import { RestaurantInfoCard, Search } from "../../components";
import { Spacer, SafeArea, Loading } from "../../../../components";
import { RestaurantsContext } from "../../../../services";


const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && <Loading />}

      <Search />
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
