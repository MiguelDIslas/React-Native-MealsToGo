import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { FlatList } from "react-native";

export const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantList = styled(FlatList)`
    padding: ${(props) => props.theme.space[3]};
`;

export const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

export const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;