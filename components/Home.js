// In App.js in a new project

import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerActions,
  DrawerItems,
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
        {/* <Nav openDrawer={this.props.navigation.openDrawer} /> */}
        <Button
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
      </View>
    );
  }
}

const RootStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        drawerLabel: 'Home',
        drawerIcon: () => (
          <Image source={require('../assets/home.png')} style={[styles.icon]} />
        ),
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
        drawerIcon: () => (
          <Image source={require('../assets/plan.png')} style={[styles.icon]} />
        ),
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: 'Profile',
        drawerIcon: () => (
          <Image
            source={require('../assets/profile.png')}
            style={[styles.icon]}
          />
        ),
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
        drawerIcon: () => (
          <Image
            source={require('../assets/itinerary.png')}
            style={[styles.icon]}
          />
        ),
      }),
    },
    Map: {
      screen: MapScreen,
      navigationOptions: () => ({
        title: 'Map',
        drawerIcon: () => (
          <Image source={require('../assets/map.png')} style={[styles.icon]} />
        ),
      }),
    },
  },
  {
    initialRootName: 'Home',
    order: ['Home', 'Profile', 'Plan', 'Itinerary', 'Map', 'Login', 'SignUp'],
    contentOptions: {
      activeBackgroundColor: 'purple',
      activeTintColor: 'white',
      itemsContainerStyle: {
        marginVertical: 30,
      },
    },
    drawerPosition: 'right',
    drawerWidth: 175,
    drawerType: 'slide',
  },
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default createAppContainer(RootStack);
