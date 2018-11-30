import React from "react";
import { View, Text, Button } from "react-native";
// import PlanScreen from "./Plan";
// import Profile from"./Profile";
// import History from "./History";

export default class DashBoardScreen extends React.Component {
  render() {
    console.log(this.props.navigation.state.params.userDetails);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DashBoard Screen</Text>

        <Button
          title="plan"
          onPress={() => {
            this.props.navigation.navigate("Plan");
          }}
        />
        <Button
          title="profile"
          onPress={() => {
            this.props.navigation.navigate("Profile");
          }}
        />
        <Button
          title="history"
          onPress={() => {
            this.props.navigation.navigate("History");
          }}
        />
        <Button
          title="suggestions"
          onPress={() => {
            this.props.navigation.navigate("Suggestions");
          }}
        />
      </View>
    );
  }
}
