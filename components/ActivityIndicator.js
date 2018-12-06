import React, { Component } from 'react'
import { View } from 'react-native'
// import Spinner from 'react-native-spinkit'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export default class ActivityIndicator extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <BallIndicator/>
        <BarIndicator/>
        <DotIndicator/>
        <MaterialIndicator/>
        <PacmanIndicator/>
        <PulseIndicator/>
        <SkypeIndicator animationDuration={2500} />
        <UIActivityIndicator/> */}
        <WaveIndicator animationDuration={2500} size={80} color={'red'}/>
      </View>
    )
  }
}
