import React from "react";
import { View, Text, Button } from "react-native";

export default class ItineraryScreen extends React.Component {
  render() {
    console.log(this.props.navigation.state.params.location);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Itinerary Screen</Text>
        <Button
          title="Map"
          onPress={() => this.props.navigation.navigate("Map")}
        />
      </View>
    );
  }
}
