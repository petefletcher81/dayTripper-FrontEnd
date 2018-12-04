import React from "react";
import { View, Text, Button } from "react-native";
// import DashBoard from './DashBoard'

export default class SuggestionsScreen extends React.Component {
  render() {
    console.log(this.props.navigation.state.params.randomAttractions);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Suggestions Screen</Text>
        {/* <Button title=''onPress={()=>{
          this.props.navigation.navigate("DashBoard")
        }} */}
        {/* /> */}
      </View>
    )
  }
}
