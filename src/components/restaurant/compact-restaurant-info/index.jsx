import { Platform } from "react-native";
import { CompactImage, CompactWebView, Item } from "./styles";
import { Text } from "../../typography/text.component";

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({ restaurant, isMap = true }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
