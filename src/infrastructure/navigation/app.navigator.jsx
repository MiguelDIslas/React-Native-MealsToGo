import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import RestaurantsNavigator from "./restaurants.navigator";
import MapNavigator from "./map.navigator";

import { SafeArea } from "../../components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

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
    name: "Settings",
    icon: "md-settings",
    component: Settings,
  },
];

export const AppNavigator = () => (
  <NavigationContainer>
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
  </NavigationContainer>
);
