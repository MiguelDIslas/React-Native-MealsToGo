import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { ThemeProvider } from "styled-components/native";
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';

export default class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
        </ThemeProvider>
        <StatusBar style="auto" />
      </>
    );
  }
}

