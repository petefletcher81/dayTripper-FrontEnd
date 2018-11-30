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
// import Callout from "react-native-maps";
import * as api from "../api";

export default function MapPins(props) {
  return props.attractions.map(attraction => {
    // console.log(props.attractions.);
    return (
      <MapView.Marker
        key={attraction.name}
        coordinate={{
          latitude: attraction.coordinates.latitude,
          longitude: attraction.coordinates.longitude
        }}
      >
        <MapView.Callout style={Styles.callout}>
          <View>
            <ScrollView>
              <Text style={Styles.calloutHeader}>{attraction.name}</Text>
              <Image
                style={Styles.placeImage}
                source={{ uri: attraction.images[0].image }}
              />
              <Button
                title={"take me there"}
                onPress={() => {
                  console.log("hello");
                  // props.getDirections(props.initialLocation, coordinate);
                }}
              />
              <Text>{attraction.intro}</Text>
            </ScrollView>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    );
  });
}

const Styles = StyleSheet.create({
  callout: {
    width: 120,
    height: 200
  },
  placeImage: {
    width: 100,
    height: 100
  },
  calloutHeader: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
