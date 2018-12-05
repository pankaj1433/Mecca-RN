import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//custom component.
import {containerStyles} from '../../common/styles';

class Wishlist extends React.Component {
  render() {
    return  (
      <View style={containerStyles.dummyContainerStyle}>
        <Text>Wishlist Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
});

export default Wishlist;
