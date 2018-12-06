import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { FormInput, FormLabel, Button, Card } from "react-native-elements";
import Nav from "./Nav";
import BgImg from "../assets/bgImgDT.png";
import * as api from "../api";

export default class ProfileScreen extends React.Component {
  state = {
    FirstName: "",
    LastName: "",
    Email: "",
    DOB: ""
  };
  render() {
    const username = this.props.navigation.state.params.userDetails.username;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        enabled
      >
        <Image source={BgImg} style={styles.backgroundImage} />
        <Nav
          openDrawer={this.props.navigation.openDrawer}
          style={{ position: "absolute" }}
        />
        {/* <KeyboardAvoidingView behavior="padding" enabled> */}
        <Card containerStyle={{ width: 300 }}>
          {/* <ScrollView keyboardDismissMode="on-drag"> */}
          <FormLabel>First Name: </FormLabel>
          <FormInput
            placeholder="Jane"
            onChangeText={input => this.setState({ FirstName: input })}
            value={this.state.FirstName}
          />
          <FormLabel>Last Name: </FormLabel>
          <FormInput
            placeholder="Doe"
            onChangeText={input => this.setState({ LastName: input })}
            value={this.state.LastName}
          />
          <FormLabel>Email: </FormLabel>
          <FormInput
            placeholder="jane@internet.com"
            onChangeText={input => this.setState({ Email: input })}
            value={this.state.Email}
          />
          <FormLabel>D.O.B : </FormLabel>
          <FormInput
            placeholder="DD/MM/YYYY"
            onChangeText={input => this.setState({ DOB: input })}
            value={this.state.DOB}
          />
          <Button
            buttonStyle={{
              marginTop: 30,
              backgroundColor: "red",
              borderRadius: 5,
              marginTop: 30,
              borderWidth: 1,
              width: 250
            }}
            fontWeight={"bold"}
            // fontSize={20}
            title="Add my Info!"
            onPress={() => {
              api
                .updateUserInfo(username, this.state)
                .then(user => {
                  console.log(user);
                  this.props.navigation.navigate("Preferences", {
                    userDetails: user.Attributes
                  });
                })
                .catch(err => {
                  console.log(err);
                });
            }}
          />
          {/* </ScrollView> */}
        </Card>
        {/* </KeyboardAvoidingView> */}
      </KeyboardAvoidingView>
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
