import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import DashBoard from "./DashBoard";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <FormLabel>Login</FormLabel>
        {/* <FormInput onChangeText=()></FormInput> */}
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

