import React from "react";
import { MapView } from "expo";
import { Button, View, ActivityIndicator, FlatList, Text } from "react-native";
import Polyline from "@mapbox/polyline";

const bolton = {
  latitude: 53.5768647,
  longitude: -2.4282192,
  latitudeDelta: 0.922,
  longitudeDelta: 0.421
};

export default class MapScreen extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    error: null,
    coords: [],
    isLoading: true,
    
  };

  componentDidMount() {
    this.getDirections("53.5768647, -2.4282192", "53.483959, -2.244644");
  }

  async getDirections(startLoc, destinationLoc) {
    return (
      fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=AIzaSyDwFHQ6Rv6UX_wX1VDrSlGu95tzghV-Cl4`
      )
        .then(response => response.json())
        //decodes the response
        .then(responseJson => {
          let points = Polyline.decode(
            responseJson.routes[0].overview_polyline.points
          );
          let coords = points.map((point, index) => {
            return {
              latitude: point[0],
              longitude: point[1]
            };
          });
          this.setState({
            coords: coords
          });
          return coords;
        })
        .catch(error => {
          console.error(error);
        })
    );
  }

  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View style={{ flex: 1, padding: 20 }}>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // }
    console.log(this.state.coords, ">>>>>>>>>>>>>>>>>>>");
    return (
      <MapView style={{ flex: 1 }} initialRegion={bolton}>
        <MapView.Polyline
          coordinates={this.state.coords}
          stroke={2}
          strokeColor="red"
        />
      </MapView>
    );
  }
}
