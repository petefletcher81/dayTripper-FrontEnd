import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import _ from "lodash";
import { Button, Tile, Overlay } from "react-native-elements";
import BgImg from "../assets/bgImgDT.png";
import Nav from "./Nav";

export default class ItineraryScreen extends React.Component {
  state = {
    attractions: [],
    randomAttractions: [],
    isVisible: false,
    contentSize: { width: 0, height: 0 }
  };

  randomAttractionsHandler = () => {
    const locationsArray = this.props.navigation.state.params.attractions;
    const randomAttractions = _.shuffle(locationsArray).slice(0, 5);
    this.setState({
      attractions: locationsArray,
      randomAttractions: randomAttractions
    });
  };

  handleIntroToggle = () => {
    const doesShow = this.state.isVisible;
    this.setState({ isVisible: !doesShow });
  };

  render() {
    const backgroundImage = {
      flex: 1,
      position: "absolute",
      resizeMode: "repeat",
      width: this.state.contentSize.width,
      height: this.state.contentSize.height
    };
    return (
      <ScrollView
        style={{ height: "80%" }}
        onContentSizeChange={(width, height) =>
          this.setState({ contentSize: { width, height } })
        }
      >
        <Image source={BgImg} style={backgroundImage} resizeMode="repeat" />
        <Nav
          openDrawer={this.props.navigation.openDrawer}
          style={{ position: "absolute" }}
        />
        {this.state.randomAttractions.map((attraction, index) => {
          return (
            <View style={{ width: 70 }}>
              <Tile
                style={{ alignContent: "center", justifyContent: "center" }}
                imageSrc={{ uri: attraction.images[0].image }}
                onPress={this.keepDestinationHandler}
                title={attraction.name}
              >
                <Button
                  buttonStyle={{
                    backgroundColor: "red",
                    borderRadius: 5,
                    marginBottom: 30,
                    marginTop: 20,
                    borderWidth: 1,
                    width: "89%",
                    marginLeft: 29
                  }}
                  title="Read More"
                  onPress={this.handleIntroToggle}
                />
                {/* {this.state.isVisible ? (
                  <Overlay>
                    <Text>{attraction.intro}</Text>
                  </Overlay>
                ) : null} */}

                {/* <Button title="Read More" onPress={this.handleIntroToggle}>
                    Read More
                  </Button>
                  {this.state.toggleIntro ? (
                    <View>
                      <Text>{attraction.intro}</Text>
                    </View>
                  ) : null} */}
              </Tile>
            </View>
          );
        })}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            padding: 10,
            borderRadius: 10
          }}
        >
          <Button
            buttonStyle={{
              backgroundColor: "red",
              borderRadius: 5,
              marginBottom: 30,
              marginTop: 20,
              borderWidth: 1,
              width: "89%",
              marginLeft: 29
            }}
            title="Randomize"
            onPress={this.randomAttractionsHandler}
          />
          <Button
            buttonStyle={{
              backgroundColor: "red",
              borderRadius: 5,
              marginBottom: 30,
              marginTop: 20,
              borderWidth: 1,
              width: "89%",
              marginLeft: 29
            }}
            title="Save Map"
            onPress={() =>
              this.props.navigation.navigate("Suggestions", {
                randomAttractions: this.state.randomAttractions
              })
            }
          />
          <Button
            buttonStyle={{
              backgroundColor: "red",
              borderRadius: 5,
              marginBottom: 30,
              marginTop: 20,
              borderWidth: 1,
              width: "89%",
              marginLeft: 29
            }}
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
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1
  }
});
