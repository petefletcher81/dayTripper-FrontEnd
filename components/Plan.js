import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { DateTimePicker } from "react-native-modal-datetime-picker";
import DateTimePickerTester from "./DatePicker";

export default class PlanScreen extends React.Component {
  state = {
    location: ""
  };
  render() {
    return (
      <View style={styles.view}>
        <Text>Welcome User!</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Location city"
          onChangeText={location => this.setState({ location })}
        />
        <DateTimePickerTester />
        <Text>{this.props.date}</Text>
        <Button
          title="Map my day!"
          onPress={() => {
            this.props.navigation.navigate("Itinerary", {
              location: `${this.state.location}`
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
