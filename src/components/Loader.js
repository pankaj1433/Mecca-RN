import React from 'react';
import { StyleSheet, ActivityIndicator, View, Dimensions } from 'react-native';
var { width, height } = Dimensions.get('window');
class Loader extends React.Component {

    render() {
        return (
            this.props.loader ?
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#fff" />
            </View>: null
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.2,
        backgroundColor: 'black',
        width: width,
        height: height,
        zIndex: 10
    }
});

export default Loader;
