import React from "react";
import { MapView } from "expo";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button
} from "react-native";

const MapPins = props => {
  return props.attractions.map(attraction => {
    let color = "#ff0000";

    if (
      props.checkedInLocations.some(
        place =>
          place.latitude === attraction.coordinates.latitude &&
          place.longitude === attraction.coordinates.longitude
      )
    ) {
      color = "#00ff00";
    }
    return (
      <MapView.Marker
        key={attraction.name}
        coordinate={{
          latitude: attraction.coordinates.latitude,
          longitude: attraction.coordinates.longitude
        }}
        pinColor={color}
      >
        <MapView.Callout
          style={Styles.callout}
          onPress={() => {
            props.getDirections(
              {
                latitude: props.initialLocation.latitude,
                longitude: props.initialLocation.longitude
              },
              {
                latitude: attraction.coordinates.latitude,
                longitude: attraction.coordinates.longitude
              }
            );
          }}
        >
          <View>
            <ScrollView>
              <Image
                style={Styles.placeImage}
                source={{ uri: attraction.images[0].image }}
              />
              <Button title={attraction.name} onPress={() => console.log()} />
              {/* <Text style={Styles.calloutHeader}></Text> */}
              <Text>{attraction.intro}</Text>
            </ScrollView>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    );
  });
};

const Styles = StyleSheet.create({
  callout: {
    width: 170,
    height: 200
  },

  placeImage: {
    width: 100,
    height: 100,
    marginLeft: "20%"
  },
  calloutHeader: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
export default MapPins;
