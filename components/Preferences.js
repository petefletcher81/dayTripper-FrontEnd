import React from "react";
import { View, Text, Picker, StyleSheet, Image } from "react-native";
// import DashBoard from './DashBoard'
import { CheckBox, Button } from "react-native-elements";
import * as api from "../api";
import Nav from "./Nav";
import BgImg from "../assets/bgImgDT.png";

export default class PreferencesScreen extends React.Component {
  state = {
    preferences: {}
  };

  handleSubmit = () => {
    const username = this.props.navigation.state.params.userDetails.username;
    api
      .updateUserPreferences(username, this.state.preferences)
      .then(user => {
        this.props.navigation.navigate("Profile");
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.preferences);
    const {
      cruises,
      eatingout,
      musicandshows,
      shopping,
      exploringnature,
      sightseeing
    } = this.state.preferences;

    const preferences = this.state.preferences;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={BgImg} style={styles.backgroundImage} />
        <Nav
          openDrawer={this.props.navigation.openDrawer}
          style={{ position: "absolute" }}
        />
        <CheckBox
          title="shopping"
          checked={shopping}
          onPress={() =>
            this.setState({
              preferences: { ...preferences, shopping: !shopping }
            })
          }
        />
        <CheckBox
          title="eating out"
          checked={eatingout}
          onPress={() =>
            this.setState({
              preferences: { ...preferences, eatingout: !eatingout }
            })
          }
        />
        <CheckBox
          title="music and shows"
          checked={musicandshows}
          onPress={() =>
            this.setState({
              preferences: { ...preferences, musicandshows: !musicandshows }
            })
          }
        />
        <CheckBox
          title="Nature"
          checked={exploringnature}
          onPress={() =>
            this.setState({
              preferences: { ...preferences, exploringnature: !exploringnature }
            })
          }
        />
        <CheckBox
          title="Cruises"
          checked={cruises}
          onPress={() =>
            this.setState({
              preferences: { ...preferences, cruises: !cruises }
            })
          }
        />
        <Button
          buttonStyle={{
            backgroundColor: "red",
            borderRadius: 5,
            marginBottom: 30,
            marginTop: 20,
            borderWidth: 1,
            width: "89%",
            marginLeft: 29
          }}
          title="Save Preferences"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }

  componentDidMount = () => {
    const userPreferences = this.props.navigation.state.params.userDetails
      .preferences;
    this.setState({ preferences: userPreferences });
  };
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover"
  }
});
