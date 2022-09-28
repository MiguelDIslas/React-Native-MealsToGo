import React from "react";
import { initializeApp } from "firebase/app";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import Navigation from "./src/infrastructure/navigation";

//Context
import {
  RestaurantsContextProvider,
  LocationContextProvider,
  FavouritesContextProvider,
} from "./src/services";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "meals-to-go-5b167.firebaseapp.com",
  projectId: "meals-to-go-5b167",
  storageBucket: "meals-to-go-5b167.appspot.com",
  messagingSenderId: "731084381316",
  appId: process.env.API_ID,
};

const myApp = initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
