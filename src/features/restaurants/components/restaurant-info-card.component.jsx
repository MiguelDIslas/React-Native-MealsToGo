import { Component } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native'
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
`;

export default class RestaurantInfoCard extends Component {
    constructor({ restaurant }) {
        super();
        this.restaurant = restaurant;
    }

    render() {
        const { name, photos } = this.restaurant;
        return (
            <RestaurantCard elevation={5}>
                <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
                <Title>{name}</Title>
            </RestaurantCard>
        )
    }
}
