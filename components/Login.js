import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Icon
} from "react-native-elements";
import DashBoard from "./DashBoard";
import * as api from "../api";

export default class LoginScreen extends React.Component {
  state = {
    username: "williamwalkers",
    password: ""
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FormLabel>Username</FormLabel>
        <FormInput
          onChangeText={text =>
            this.setState({
              username: text
            })
          }
          value={this.state.username}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={text =>
            this.setState({
              password: text
            })
          }
          value={this.state.password}
        />
        <Icon
          raised
          name="key"
          type="font-awesome"
          color="#f50"
          onPress={() => {
            api.getUserProfile(this.state.username).then(res =>
              Object.keys(res).length === 0
                ? this.setState({ username: "", password: "" })
                : this.props.navigation.navigate("DashBoard", {
                    userDetails: res
                  })
            );
          }}
        />
      </View>
    );
  }
}
