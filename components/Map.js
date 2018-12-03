import React from 'react';
import { MapView } from 'expo';
import {
  Platform,
  Button,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';

import { Constants, Location, Permissions } from 'expo';
import MapPins from './MapPins.js';
import { getDirections } from '../api';

export default class MapScreen extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    error: null,
    coordsArray: [],
    isLoading: true,
  };

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        error:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        error: 'Permission to access location was denied',
      });
    } else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        isLoading: false,
      });
    }
  };

  generateDirections = (start, end) => {
    getDirections(start, end).then(coords => {
      console.log(JSON.stringify(coords));
      this.setState({
        coordsArray: [...this.state.coordsArray, coords],
      });
    });
  };

  cameraViewHandler = () => {
    this.map.animateToViewingAngle(50, 2);
    // this.map.animateCamera({ pitch: 45, altitude: 50 });
  };

  render() {
    const initialLocation = {
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };

    if (this.state.isLoading) {
      return (
        <View>
          <Text>loading....</Text>
        </View>
      );
    }

    return (
      // <View style={{ paddingTop: 5 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={initialLocation}
        showsUserLocation
        followsUserLocation={true}
        showsCompass={true}
        onPress={this.cameraViewHandler}
        ref={ref => (this.map = ref)}
        maxZoomLevel={20}
        showsMyLocationButton
      >
        <MapPins
          initialLocation={initialLocation}
          getDirections={this.generateDirections}
          attractions={this.props.navigation.state.params.randomAttractions}
        />
        {this.state.coordsArray.map((coords, index) => {
          return (
            <MapView.Polyline
              key={index}
              coordinates={coords}
              stroke={2}
              strokeColor="red"
            />
          );
        })}
      </MapView>
      // </View>
    );
  }
}
