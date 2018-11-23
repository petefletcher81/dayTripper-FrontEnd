import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DashBoardScreen from "./DashBoard";

export default class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Sign Up Screen</Text>
        <Button
          title="Submit"
          onPress={() => {
            this.props.navigation.navigate("DashBoard");
          }}
        />
      </View>
    );
  }
}
