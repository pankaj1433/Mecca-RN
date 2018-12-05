import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SearchBar extends React.Component {
    state = {
        searchText: ''
    };

    render() {
        let {searchText} = this.state;
        let {searchHandler} = this.props;
        return (
            <View style={SearchBarStyles.containerStyle}>
                <TextInput  style={SearchBarStyles.inputStyle}
                            placeholder = {'Type here'}
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
