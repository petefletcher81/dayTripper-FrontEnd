import React from 'react';
import { MapView, Marker, Callout } from 'expo';
import { View, Text } from 'react-native';

export default function MapPins(props) {
  return props.attractions.map(attraction => {
    console.log('pin');
    return (
      <MapView.Marker
        key={attraction.name}
        coordinate={{
          latitude: attraction.coordinates.latitude,
          longitude: attraction.coordinates.longitude,
        }}
        title={attraction.name}
        // description={attraction.intro}
      />
    );
  });
}
