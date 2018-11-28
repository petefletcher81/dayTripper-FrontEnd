import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false,
    date: ""
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = date => {
    // console.log(date);
    this.setState({
      isDateTimePickerVisible: false,
      date: date.toString().slice(0, -23)
    });
  };
  _handleDatePicked = date => {
    // console.log("A date has been picked: ", date);
    this._hideDateTimePicker(date);
  };

  render() {
    console.log(this.state);
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
          <Text>{this.state.date}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}
