import React from "react";
import { MapView } from "expo";
import {
  Platform,
  Button,
  View,
  ActivityIndicator,
  FlatList,
  Text
} from "react-native";
import Polyline from "@mapbox/polyline";
import { Constants, Location, Permissions } from "expo";
import GOOGLEAPI from "../config.js";

export default class MapScreen extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    error: null,
    coords: [],
    isLoading: true
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        error:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        error: "Permission to access location was denied"
      });
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        isLoading: false
      });
    }
  };

  async getDirections(startLoc, destinationLoc) {
    return (
      fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&mode=walking&key=${
          GOOGLEAPI.GOOGLEDIR
        }`
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
    const initialLocation = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };

    if (this.state.isLoading) {
      return (
        <View>
          <Text>loading....</Text>
        </View>
      );
    }

    // console.log(this.props.navigation.state.params.placename);
    const destination = this.props.navigation.state.params.placename;
    // const destLoc = destination.toLowerCase();
    // console.log(destLoc);
    return (
      <MapView style={{ flex: 1 }} initialRegion={initialLocation}>
        <MapView.Polyline
          coordinates={this.state.coords}
          stroke={2}
          strokeColor="red"
        />
        <Button
          title="Generate Directions"
          onPress={() => {
            this.getDirections(
              `${this.state.latitude},${this.state.longitude}`,
              `${destination}`
            );
          }}
        />
      </MapView>
    );
  }
}
