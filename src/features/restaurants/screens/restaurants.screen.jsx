import { Component } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components";
import { Spacer, SafeArea } from '../../../components';
import { restaurantTest } from '../../../data/data';
//import restaurant context
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList)`
    padding: ${(props) => props.theme.space[3]};
`;

export default class RestaurantsScreen extends Component {
    render() {
        return (
            <SafeArea>
                <SearchContainer>
                    <Searchbar />
                </SearchContainer>
                <RestaurantList
                    data={restaurantTest}
                    renderItem={({ item }) => (
                        <Spacer position={"bottom"} size={"large"}>
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    )}
                    keyExtractor={(item) => item.name}
                />
            </SafeArea>
        );
    }
};

RestaurantsScreen.contextType = RestaurantsContext;