import React from "react";
import { View, Button, Text, Image } from "react-native";
import _ from "lodash";
import { Card } from "react-native-elements";

export default class ItineraryScreen extends React.Component {
  state = {

    attractions: [],
    randomAttractions: []
  };

  render() {
    return (
      <View>
        <Card>
          {this.state.randomAttractions.map((attraction, index) => {
            return (
              <View key={index}>
                <Image
                  source={{ uri: attraction.images[0].image }}
                  style={{ width: 50, height: 50 }}
                />
                <Text>{attraction.name}</Text>
              </View>
            );
          })}
        </Card>
        <Button title="Randomize" />
        <Button
          title="Map locations"
          onPress={() => this.props.navigation.navigate("Map", {
            randomAttractions: this.state.randomAttractions
          })}
        />
      </View>
    );

  }
  componentDidMount = () => {
    console.log("log 1");
    const locationsArray = this.props.navigation.state.params.attractions;
    const randomAttractions = _.shuffle(locationsArray).slice(0, 5);
    this.setState({
      attractions: locationsArray,
      randomAttractions: randomAttractions
    });
  };
}
