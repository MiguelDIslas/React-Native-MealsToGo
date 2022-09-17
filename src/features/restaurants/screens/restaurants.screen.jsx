import { Component } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import { RestaurantInfoCard } from "../components";
import { restaurantTest } from '../../../data/data';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`} ;
`;

const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`;

export default class RestaurantsScreen extends Component {
    render() {
        return (
            <SafeArea>
                <SearchContainer>
                    <Searchbar />
                </SearchContainer>
                <RestaurantListContainer>
                    <RestaurantInfoCard restaurant={restaurantTest} />
                </RestaurantListContainer>
            </SafeArea>
        );
    }
};

const styles = StyleSheet.create({

    search: {
        padding: 16,
    },
    list: {
        flex: 1,
        padding: 16,
        backgroundColor: "blue",
    },
});