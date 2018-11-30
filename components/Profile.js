import React from 'react';
import { View, Text, Button, Picker } from 'react-native';
// import DashBoard from './DashBoard'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  CheckBox,
} from 'react-native-elements';
import * as api from '../api';
import Nav from './Nav';

export default class ProfileScreen extends React.Component {
  state = {
    preferences: {},
  };

  handleSubmit = () => {};

  render() {
    console.log(this.state.preferences);
    const {
      cruises,
      eatingout,
      musicandshows,
      shopping,
      exploringnature,
      sightseeing,
    } = this.state.preferences;
    const preferences = this.state.preferences;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Nav openDrawer={this.props.navigation.openDrawer} />
        <CheckBox
          title="shopping"
          checked={shopping}
          onPress={() =>
            this.setState({
              preferences: { ...preferences, shopping: !shopping },
            })
          }
        />
        <Button center title="Save Preferences" onPress={this.handleSubmit} />
      </View>
    );
  }

  componentDidMount = () => {
    const userPreferences = this.props.navigation.state.params.userDetails
      .preferences;
    this.setState({ preferences: userPreferences });
  };
}
