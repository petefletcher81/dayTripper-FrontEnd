// In App.js in a new project

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Button } from 'react-native-elements';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerActions,
  DrawerItems
} from "react-navigation";
import LoginScreen from "./Login";
import SignUpScreen from "./SignUp";
import JourneyPlannerScreen from "./JourneyPlanner.js";
import DashBoardScreen from "./DashBoard";
import PlanScreen from "./Plan";
import ProfileScreen from "./Profile";
import HistoryScreen from "./History";
import SuggestionsScreen from "./Suggestions";
import ItineraryScreen from "./Itinerary";
import MapScreen from "./Map.js";
import BgImg from "../assets/bgImgDT.png";

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  render() {
    return (
      <View elevation={5} style={styles.container}>
        <Image source={BgImg} style={styles.backgroundImage} />

        <Button
            buttonStyle={{ backgroundColor: "red", borderRadius: 3, marginBottom: 30, borderColor: "black", borderWidth: 1, width: "90%", marginLeft: 29 }}
            title="Login"
            onPress={() =>
              this.props.navigation.navigate("Login")
            }
          />
        <Button
            buttonStyle={{ backgroundColor: "red", borderRadius: 5, marginBottom: 30, borderWidth: 1, width: "89%", marginLeft: 29 }}
            title="Sign Up"
            onPress={() =>
              this.props.navigation.navigate("SignUp")
            }
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
        drawerLabel: "Home",
        drawerIcon: () => (
          <Image source={require("../assets/home.png")} style={[styles.icon]} />
        )
      })
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: "Login"
      })
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        title: "SignUp"
      })
    },
    JourneyPlanner: {
      screen: JourneyPlannerScreen,
      navigationOptions: () => ({
        title: "Journey Planner"
      })
    },
    DashBoard: {
      screen: DashBoardScreen,
      navigationOptions: () => ({
        title: "Dashboard"
      })
    },
    Plan: {
      screen: PlanScreen,
      navigationOptions: () => ({
        title: "Plan",
        drawerIcon: () => (
          <Image source={require("../assets/plan.png")} style={[styles.icon]} />
        )
      })
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: "Profile",
        drawerIcon: () => (
          <Image
            source={require("../assets/profile.png")}
            style={[styles.icon]}
          />
        )
      })
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: () => ({
        title: "History"
      })
    },
    Suggestions: {
      screen: SuggestionsScreen,
      navigationOptions: () => ({
        title: "Suggestions"
      })
    },
    Itinerary: {
      screen: ItineraryScreen,
      navigationOptions: () => ({
        title: "Itinerary",
        drawerIcon: () => (
          <Image
            source={require("../assets/itinerary.png")}
            style={[styles.icon]}
          />
        )
      })
    },
    Map: {
      screen: MapScreen,
      navigationOptions: () => ({
        title: "Map",
        drawerIcon: () => (
          <Image source={require("../assets/map.png")} style={[styles.icon]} />
        )
      })
    }
  },
  {
    initialRootName: "Home",
    order: [
      "Home",
      "Profile",
      "Plan",
      "Itinerary",
      "Map",
      "Suggestions",
      "Login",
      "SignUp"
    ],
    contentOptions: {
      activeBackgroundColor: "red",
      activeTintColor: "white",
      itemsContainerStyle: {
        marginVertical: 30
      }
    },
    drawerPosition: "right",
    drawerWidth: 175,
    drawerType: "slide"
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover"
  },
  container:{
    padding:20,
    flex: 1,
     alignItems: "center", 
     justifyContent: "center"
   },
});

export default createAppContainer(RootStack);
