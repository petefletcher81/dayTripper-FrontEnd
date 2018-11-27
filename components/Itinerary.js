import React from "react";
import { View, Text, Button, ListItem, FlatList } from "react-native";

export default class ItineraryScreen extends React.Component {
  state = {
    placeName: [
      "Manchester Art Gallery",
      "Manchester Museum of Science and Industry",
      "Manchester People's History Museum"
    ]
  };

  render() {
    return this.state.placeName.map((place, index) => {
      return (
        <View>
          <Button
            key={`${index}`}
            onPress={() => {
              this.props.navigation.navigate("Map", {
                placename: `${
                  this.props.navigation.state.params.location
                } ``${place}`
              });
            }}
            title={place}
          />
        </View>
      );
    });
  }
}
