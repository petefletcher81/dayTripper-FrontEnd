import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import DateTimePickerTester from "./DatePicker";
import * as api from "../api";

export default class PlanScreen extends React.Component {
  state = {
    location: "Manchester",
    username: "williamwalkers",
    attractions: []
  };
  render() {
    return (
      <View style={styles.view}>
        <Text>Welcome User!</Text>
        <TextInput
          value={this.state.location}
          style={styles.textInput}
          placeholder="Location city"
          onChangeText={location => this.setState({ location })}
        />
        <DateTimePickerTester />
        <Text>{this.props.date}</Text>
        <Button
          title="Map my day!"
          onPress={() => {
            api
              .getAttractions(this.state.username, this.state.location)
              .then(attractions => this.setState({ attractions: attractions }))
              .then(res => {
                this.props.navigation.navigate("Itinerary", {
                  location: `${this.state.location}`,
                  attractions: this.state.attractions
                });
              });
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  textInput: {
    backgroundColor: "#87cefa",
    color: "black",
    width: "50%",
    height: 40
  },
  date: {
    color: "blue"
  }
});
