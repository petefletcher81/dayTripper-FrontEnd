// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./Login";
import SignUpScreen from "./SignUp";
import JourneyPlannerScreen from "./JourneyPlanner.js";
import DashBoardScreen from "./DashBoard";
import PlanScreen from "./Plan";
import ProfileScreen from "./Profile";
import HistoryScreen from "./History";
import SuggestionsScreen from"./Suggestions"

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
        <Button
          title="Sign up"
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        />
        <Button
          title="Skip"
          onPress={() => {
            this.props.navigation.navigate("JourneyPlanner");
          }}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    JourneyPlanner: JourneyPlannerScreen,
    DashBoard: DashBoardScreen,
    Plan: PlanScreen,
    Profile:ProfileScreen,
    History:HistoryScreen,
    Suggestions: SuggestionsScreen
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
