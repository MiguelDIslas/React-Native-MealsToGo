import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RestaurantList = styled(FlatList)`
  padding: ${(props) => props.theme.space[3]};
`;
