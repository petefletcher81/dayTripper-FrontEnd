// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./login";
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Login"
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        />
      </View>
    );
  }
}
// class LoginScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Login Screen</Text>
//       </View>
//     );
//   }
// }

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen
  },
  {
    initialRootName: "Home"
  }
);
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   }
// });

export default createAppContainer(RootStack);
