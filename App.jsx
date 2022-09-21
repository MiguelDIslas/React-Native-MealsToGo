import React from 'react';

import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from './src/features/restaurants/screens';
import { Ionicons } from '@expo/vector-icons'
import { theme } from './src/infrastructure/theme';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { SafeArea } from './src/components'

//Context
import { RestaurantsContextProvider, LocationContextProvider } from './src/services'

const Tab = createBottomTabNavigator();

const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>
const Map = () => <SafeArea><Text>Map</Text></SafeArea>

const TAB_OPTIONS = [
  {
    name: 'Restaurants',
    icon: 'md-restaurant',
    component: RestaurantsScreen
  },
  {
    name: 'Map',
    icon: 'md-map',
    component: Map
  }, {
    name: 'Settings',
    icon: 'md-settings',
    component: Settings
  },
]

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                  headerShown: false,
                }}
              >
                {TAB_OPTIONS.map((option) =>
                  <Tab.Screen key={option.name} name={option.name} component={option.component} options={{
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name={option.icon} size={size} color={color} />
                    ),
                  }} />
                )}
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

