import React from "react";
import { View, Text, Button } from "react-native";
import DashBoard from "./DashBoard";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <Button
          title="send to dashboard screen"
          onPress={() => {
            this.props.navigation.navigate("DashBoard");
          }}
        />
      </View>
    );
  }
}

