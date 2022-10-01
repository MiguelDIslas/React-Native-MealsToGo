import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import {
  RestaurantsContextProvider,
  LocationContextProvider,
  FavouritesContextProvider,
} from "../../services";

import RestaurantsNavigator from "./restaurants.navigator";
import MapNavigator from "./map.navigator";
import SettingsNavigator from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_OPTIONS = [
  {
    name: "RestaurantsN",
    icon: "md-restaurant",
    component: RestaurantsNavigator,
  },
  {
    name: "MapN",
    icon: "md-map",
    component: MapNavigator,
  },
  {
    name: "SettingsN",
    icon: "md-settings",
    component: SettingsNavigator,
  },
];

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
          }}
        >
          {TAB_OPTIONS.map((option) => (
            <Tab.Screen
              key={option.name}
              name={option.name}
              component={option.component}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name={option.icon} size={size} color={color} />
                ),
              }}
            />
          ))}
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
