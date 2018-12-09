import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//custom component.
import {containerStyles} from '../../common/styles';

class Profile extends React.Component {
  render() {
    return  (
      <View style={containerStyles.dummyContainerStyle}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default Profile;
