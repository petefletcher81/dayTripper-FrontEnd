import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { FormLabel, FormInput, Icon, Button } from "react-native-elements";
import * as api from "../api";
import BgImg from "../assets/bgImgDT.png";

export default class LoginScreen extends React.Component {
  state = {
    username: "williamwalkers",
    password: ""
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={BgImg} style={styles.backgroundImage} />
        <FormLabel>Username</FormLabel>
        <FormInput
          containerStyle={{
            width: 200
          }}
          onChangeText={text =>
            this.setState({
              username: text
            })
          }
          value={this.state.username}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          containerStyle={{
            width: 200
          }}
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
          color="red"
          onPress={() => {
            api.getUserProfile(this.state.username).then(res =>
              Object.keys(res).length === 0
                ? this.setState({ username: "", password: "" })
                : this.props.navigation.navigate("Preferences", {
                    userDetails: res
                  })
            );
          }}
        />
        <Button
          buttonStyle={{
            backgroundColor: "red",
            borderRadius: 5,
            borderWidth: 1
          }}
          title="don't have an account? sign up"
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover"
  }
});
