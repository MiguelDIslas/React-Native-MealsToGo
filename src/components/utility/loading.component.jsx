import { Component } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const SpinnerIndicator = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export default class Loading extends Component {
  render() {
    return (
      <LoadingContainer>
        <SpinnerIndicator size={50} animating={true} color={Colors.blue300} />
      </LoadingContainer>
    );
  }
}
