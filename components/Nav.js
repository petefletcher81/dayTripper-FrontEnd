import React from 'react';
import { Icon, Header, View } from 'react-native-elements';

export default class Nav extends React.Component {
  render() {
    return (
      <>
        <Header
          title="drawer"
          placement="left"
          leftComponent={{ icon: 'face', color: '#fff' }}
          centerComponent={{ text: 'Day Tripper', style: { color: '#fff' } }}
          rightComponent={{ icon: 'menu', color: '#fff' }}
          outerContainerStyles={{
            backgroundColor: 'purple',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        />
        <Icon
          name="menu"
          onPress={() => this.props.openDrawer()}
          raised
          containerStyle={{
            backgroundColor: 'purple',
            position: 'absolute',
            top: 5,
            right: 5,
          }}
        />
      </>
    );
  }
}

// const styles = StyleSheet.create({
//   view: { backgroundColor: '#87cefa' },
// });
