import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  FormInput,
  FormLabel,
  FormValidationMessage,
} from 'react-native-elements';
import * as api from '../api';

export default class SignUpScreen extends React.Component {
  state = {
    username: '',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FormLabel>Username:</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />
        <Button
          title="Sign Up"
          onPress={() => {
            api
              .createUserProfile(this.state.username)
              .then(res => {
                this.props.navigation.navigate('DashBoard');
              })
              .catch(err => {
                this.setState({username: ''})
              });
          }}
        />

        <Button
          title="Already have a account? Sign In"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
        />
      </View>
    );
  }
}
