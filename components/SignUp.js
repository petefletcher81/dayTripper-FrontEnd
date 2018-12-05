import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  FormInput,
  FormLabel,
  FormValidationMessage,
  Button
} from 'react-native-elements';
import * as api from '../api';
import BgImg from "../assets/bgImgDT.png";

export default class SignUpScreen extends React.Component {
  state = {
    username: `${Date.now()}`,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Image source={BgImg} style={styles.backgroundImage} />
        <FormLabel>Username:</FormLabel>
        <FormInput style={{ marginBottom: 30}}
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />
        <Button buttonStyle={{ backgroundColor: "red", borderRadius: 5, marginBottom: 30, borderWidth: 1, width: "89%", marginLeft: 29 }}
          title="Sign Up"
          onPress={() => {
            api
              .createUserProfile(this.state.username)
              .then(() => {
                api.getUserProfile(this.state.username).then(user => {
                  this.props.navigation.navigate('Profile', {
                    userDetails: user
                  });
                });
              })
              .catch(err => {
                this.setState({ username: '' });
              });
          }}
        />

        <Button  buttonStyle={{ backgroundColor: "red", borderRadius: 5, marginBottom: 30, borderWidth: 1, width: "89%", marginLeft: 29 }}
          title="Already have a account? Sign In"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover"
  }
});
