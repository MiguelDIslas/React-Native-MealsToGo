import { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
} from "../../components/account-background.component";
import { Spacer, Loading } from "../../../../components";
import { AuthenticationContext } from "../../../../services";

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { isLoading, onLogin } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={state.email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setState({ ...state, email })}
        />

        <Spacer size="large" />

        <AuthInput
          label="Password"
          value={state.password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(password) => setState({ ...state, password })}
        />
        <Spacer size="large" />
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(state.email, state.password)}
          >
            Login
          </AuthButton>
        ) : (
          <Loading />
        )}
        <Spacer size="large" />
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default LoginScreen;
