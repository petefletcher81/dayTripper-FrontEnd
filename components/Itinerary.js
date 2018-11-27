import React from "react";
import { View, Text, Button, ListItem, FlatList } from "react-native";

export default class ItineraryScreen extends React.Component {
  state = {
    placeName: ["Manchester Art Gallery"]
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => {
            this.props.navigation.navigate("Map", {
              placename: `${this.state.placeName[0]}`
            });
          }}
          title="Place"
        />
      </View>
    );
  }
}
