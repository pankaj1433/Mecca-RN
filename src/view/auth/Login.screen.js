import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//custom component.
import {containerStyles} from '../../common/styles';

class Login extends React.Component {
  render() {
    return  (
      <View style={containerStyles.container}>
        <Text>Login Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default Login;
