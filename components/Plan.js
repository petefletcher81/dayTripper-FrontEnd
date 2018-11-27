import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { DateTimePicker } from "react-native-modal-datetime-picker";
import DateTimePickerTester from "./DatePicker";

export default class PlanScreen extends React.Component {
  state = {
    location: "",
    date: "",
    markedDay: {}
  };
  render() {
    return (
      <View style={styles.view}>
        <Text>Welcome User!</Text>
        <TextInput style={styles.textInput} placeholder="Location city" />
        <DateTimePickerTester />
        <Button
          title="Map my day!"
          onPress={() => {
            this.props.navigation.navigate("Itinerary");
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
