import { useState } from 'react';
import { RestaurantInfoCard } from "../../components";
import { SafeArea } from "../../../../components";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};

export default RestaurantDetailScreen;
