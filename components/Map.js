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
      this.getDirections(
        `${this.state.latitude},${this.state.longitude}`,
        "Manchester art gallery"
      );
    }
  };

  async getDirections(startLoc, destinationLoc) {
    return (
      fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&mode=walking&key=AIzaSyDwFHQ6Rv6UX_wX1VDrSlGu95tzghV-Cl4`
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

    return (
      <MapView style={{ flex: 1 }} initialRegion={initialLocation}>
        <MapView.Polyline
          coordinates={this.state.coords}
          stroke={2}
          strokeColor="red"
        />
      </MapView>
    );
  }
}

// export default class App extends Component {
//   state = {
//     location: null,
//     errorMessage: null
//   };

//   componentWillMount() {
//     if (Platform.OS === "android" && !Constants.isDevice) {
//       this.setState({
//         errorMessage:
//           "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
//       });
//     } else {
//       this._getLocationAsync();
//     }
//   }

//   _getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== "granted") {
//       this.setState({
//         errorMessage: "Permission to access location was denied"
//       });
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     this.setState({ location });
//   };

//   render() {
//     let text = "Waiting..";
//     if (this.state.errorMessage) {
//       text = this.state.errorMessage;
//     } else if (this.state.location) {
//       text = JSON.stringify(this.state.location);
//     }

//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>{text}</Text>
//       </View>
//     );
//   }
// }
