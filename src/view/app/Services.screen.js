import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//custom component.
import {containerStyles} from '../../common/styles';

class Service extends React.Component {
  render() {
    return  (
      <View style={containerStyles.dummyContainerStyle}>
        <Text>Service Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
});

export default Service;
