import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import _ from "lodash";
import {
  Card,
  List,
  Button,
  ListItem,
  Tile,
  Avatar
} from "react-native-elements";

export default class ItineraryScreen extends React.Component {
  state = {
    attractions: [],
    randomAttractions: [],
    toggleIntro: false
  };

  randomAttractionsHandler = () => {
    console.log("log 2");
    const locationsArray = this.props.navigation.state.params.attractions;
    const randomAttractions = _.shuffle(locationsArray).slice(0, 5);
    this.setState({
      attractions: locationsArray,
      randomAttractions: randomAttractions
    });
  };

  handleIntroToggle = () => {
    console.log("pressed");
    const doesShow = this.state.toggleIntro;
    this.setState({ toggleIntro: !doesShow });
  };

  keepDestinationHandler = () => {
    console.log();
  };

  render() {
    return (
      <ScrollView style={{ height: "80%" }}>
        {this.state.randomAttractions.map((attraction, index) => {
          return (
            <Tile
              style={{ alignItems: "center", justifyContent: "center" }}
              imageSrc={{ uri: attraction.images[0].image }}
              onPress={this.keepDestinationHandler}
              title={attraction.name}
            >
              <View
                key={index}
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Text>hello</Text>
              </View>

              {/* <Button title="Read More" onPress={this.handleIntroToggle}>
                    Read More
                  </Button>
                  {this.state.toggleIntro ? (
                    <View>
                      <Text>{attraction.intro}</Text>
                    </View>
                  ) : null} */}
            </Tile>
          );
        })}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 10,
            borderRadius: 10
          }}
        >
          <Button
            buttonStyle={{ backgroundColor: "red", borderRadius: 10 }}
            title="Randomize"
            onPress={this.randomAttractionsHandler}
          />
          <Button
            buttonStyle={{ backgroundColor: "red", borderRadius: 10 }}
            title="Save Map"
            onPress={() =>
              this.props.navigation.navigate("Suggestions", {
                randomAttractions: this.state.randomAttractions
              })
            }
          />
          <Button
            buttonStyle={{ backgroundColor: "red", borderRadius: 10 }}
            title="Map locations"
            onPress={() =>
              this.props.navigation.navigate("Map", {
                randomAttractions: this.state.randomAttractions
              })
            }
          />
        </View>
      </ScrollView>
    );
  }
  componentDidMount = () => {
    console.log("log 1");
    this.randomAttractionsHandler();
  };
}

// const Styles = StyleSheet.Create({
//   image: {
//     height: 100,
//     width: 100
//   }
// });
