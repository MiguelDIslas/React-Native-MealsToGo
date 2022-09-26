import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "../../features/map/screens";

const MapStack = createStackNavigator();

const MapNavigator = () => {
  return (
    <MapStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MapStack.Screen name="Map" component={MapScreen} />
    </MapStack.Navigator>
  );
};

export default MapNavigator;
