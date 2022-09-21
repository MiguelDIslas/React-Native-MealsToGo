import { useContext } from "react";
import { Searchbar, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../../components";
import { Spacer, SafeArea } from '../../../../components';
//import restaurant context
import { RestaurantsContext } from "../../../../services";
import { SearchContainer, RestaurantList, Loading, LoadingContainer } from './styles';

const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.blue300} />
                </LoadingContainer>
            )}

            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => (
                    <Spacer position={"bottom"} size={"large"}>
                        <RestaurantInfoCard restaurant={item} />
                    </Spacer>
                )
                }
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    )
}

export default RestaurantsScreen;