import React from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";

export default class MapScreen extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421
        }}
      />
    );
  }
}
