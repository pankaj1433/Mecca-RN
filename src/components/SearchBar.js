import React from 'react';
import {    StyleSheet, Dimensions,
            TouchableOpacity, 
            View, TextInput, Animated, 
            TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
class SearchBar extends React.Component {
    
    state = {
        searchText: '',
        _widthAnimation: new Animated.Value(60),
        showSearch: false
    };

    showSearchBar = () => {
        this.setState({
            showSearch: true
        });
    }

    startAnimation = () => {
        Animated.sequence([
            Animated.timing(this.state._widthAnimation, {
              toValue: width-60,
              duration: 400,
            }),
        ]).start(this.showSearchBar);
    }

    render() {
        let {searchText, showSearch} = this.state;
        let {searchHandler, placeholder} = this.props;
        return (
            !showSearch ?
            <Animated.View style={[SearchBarStyles.animatedContaincer, {width: this.state._widthAnimation}]}>
                <TouchableWithoutFeedback onPress={()=>this.startAnimation()} >
                        <Ionicons   name={'ios-search'} 
                                    size={22} 
                                    color={'#f68e8d'} />
                </TouchableWithoutFeedback>
            </Animated.View>
            : <View style={SearchBarStyles.containerStyle}>
                <TextInput  style={SearchBarStyles.inputStyle}
                            placeholder = {placeholder || 'Type here'}
                            placeholderTextColor = {'#9a9a9a'}
                            onSubmitEditing={() => searchHandler(searchText)}
                            onChangeText={(searchText) => { this.setState({ searchText }) }} />
                <TouchableOpacity onPress={() => searchHandler(searchText)} style={SearchBarStyles.iconButton}>
                    <Ionicons   name={'ios-search'} 
                                size={22} 
                                color={'#f68e8d'} />
                </TouchableOpacity>      
            </View>
        );
    }
}

const SearchBarStyles = StyleSheet.create({
    animatedContaincer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        height :60,
        borderRadius: 30,
        marginVertical: 30,
    },
    containerStyle: {
        marginVertical: 30,
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 0,
        borderRadius: 4,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    inputStyle: {
        backgroundColor: '#fff',
        borderRadius: 4,
        flex: 1,
        fontSize: 18,
        padding: 18,
        height :60,
    },
    clearIcon: {
        display: "none"
    },
    iconButton: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SearchBar;
