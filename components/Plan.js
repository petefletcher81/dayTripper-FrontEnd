import React from "react";
import { View, Text, Button } from "react-native";

export default class PlanScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>PlanScreen</Text>
        <Button
          title="Itinerary"
          onPress={() => {
            this.props.navigation.navigate("Itinerary");
          }}
        />
      </View>
    );
  }
}
