import React from "react";
import { Icon, Header, View } from "react-native-elements";

export default class Nav extends React.Component {
  render() {
    return (
      <>
        <Header
          title="drawer"
          placement="left"
          leftComponent={
            <Icon
              name="face"
              color="white"
              // onPress={() => this.props.navigation.navigate("Profile")}
            />
          }
          centerComponent={{
            text: "Day Tripper",
            style: {
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Gill Sans",
              fontSize: 25
            }
          }}
          rightComponent={
            <Icon
              name="menu"
              color="white"
              onPress={() => this.props.openDrawer()}
            />
          }
          outerContainerStyles={{
            backgroundColor: "red",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0
          }}
        />
        {/* <Icon
          name="menu"
          color="white"
          onPress={() => this.props.openDrawer()}
          Style={{
            backgroundColor: "red",
            position: "absolute",
            top: 5,
            right: 5
          }}
        /> */}
      </>
    );
  }
}
