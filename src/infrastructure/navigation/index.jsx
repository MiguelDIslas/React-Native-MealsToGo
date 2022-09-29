import { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services";
import { NavigationContainer } from "@react-navigation/native";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
    return (
      <NavigationContainer>
        {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
      </NavigationContainer>
    );
};

export default Navigation;
