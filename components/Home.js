// In App.js in a new project

import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerActions,
} from 'react-navigation';
import LoginScreen from './Login';
import SignUpScreen from './SignUp';
import JourneyPlannerScreen from './JourneyPlanner.js';
import DashBoardScreen from './DashBoard';
import PlanScreen from './Plan';
import ProfileScreen from './Profile';
import HistoryScreen from './History';
import SuggestionsScreen from './Suggestions';
import ItineraryScreen from './Itinerary';
import MapScreen from './Map.js';
import Nav from './Nav.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Nav openDrawer={this.props.navigation.openDrawer} />
        {/* <Button
          title="Login"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
        />
        <Button
          title="Sign up"
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
        />
        <Button
          title="Itinerary"
          onPress={() => {
            this.props.navigation.navigate('Itinerary');
          }}
        />
        <Button
          title="Skip"
          onPress={() => {
            this.props.navigation.navigate('Suggestions');
          }}
        /> */}
      </View>
    );
  }
}

// const MyDrawerNavigator = createDrawerNavigator({
//   Home: { screen: HomeScreen },
// });

const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Home',
      }),
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: 'Login',
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        title: 'SignUp',
      }),
    },
    JourneyPlanner: {
      screen: JourneyPlannerScreen,
      navigationOptions: () => ({
        title: 'Journey Planner',
      }),
    },
    DashBoard: {
      screen: DashBoardScreen,
      navigationOptions: () => ({
        title: 'Dashboard',
      }),
    },
    Plan: {
      screen: PlanScreen,
      navigationOptions: () => ({
        title: 'Plan',
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: 'Profile',
      }),
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: () => ({
        title: 'History',
      }),
    },
    Suggestions: {
      screen: SuggestionsScreen,
      navigationOptions: () => ({
        title: 'Suggestions',
      }),
    },
    Itinerary: {
      screen: ItineraryScreen,
      navigationOptions: () => ({
        title: 'Itinerary',
      }),
    },
    Map: {
      screen: MapScreen,
      navigationOptions: () => ({
        title: 'Map',
      }),
    },
  },
  {
    initialRootName: 'Home',
    contentOptions: {
      itemStyle: { flexDirection: 'row-reverse' },
    },
    drawerPosition: 'right',
    drawerWidth: 200,
  },
);

export default createAppContainer(RootStack);
