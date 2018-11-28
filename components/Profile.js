import React from "react";
import { View, Text, Button, Picker } from "react-native";
// import DashBoard from './DashBoard'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  CheckBox
} from "react-native-elements";

export default class ProfileScreen extends React.Component {
  state = {
    username: "",
    firstname: "",
    lastname: "",
    preference1: false,
    checked: false
  };

  handleSubmit = () => {
    onChangeText = "";
    fetch(
      "https://xprfmsf0pb.execute-api.eu-west-1.amazonaws.com/dev/createUser",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          firstname: this.state.firstname,
          lastname: this.state.lastname
        })
      }
    ).then(res => {
      console.log(res);
      this.setState({
        username: "",
        firstname: "",
        lastname: ""
      });
    });
  };

  render() {
    console.log(this.state.firstname);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FormLabel>username</FormLabel>
        <FormInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <FormLabel>Firstname</FormLabel>
        <FormInput
          value={this.state.firstname}
          onChangeText={firstname => this.setState({ firstname })}
        />
        <FormLabel>Surname</FormLabel>
        <FormInput
          value={this.state.lastname}
          onChangeText={lastname => this.setState({ lastname })}
        />
        <Button title="Save" onPress={this.handleSubmit} />
      </View>
    );
  }

  componentDidMount = () => {};
}
