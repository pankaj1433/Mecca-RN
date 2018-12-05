import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';

//custom component.
import {containerStyles} from '../../common/styles';
import {UserList} from '../../common/dummyData';

class SearchResult extends React.Component {

    openDetail = id => {
        this.props.navigation.navigate('UserDetail', {id: id} );
    }

    _renderItem = ({item}) => {
        return (
            <View style={styles.itemCard}>
                <View>
                    <Text style={styles.name}>{`${item.FirstName} ${item.LastName}`}</Text>
                    <Text style={[styles.subText,{marginBottom: 5}]}>{`${item.Email}`}</Text>
                    <Text style={styles.subText}>{`${item.Phone}`}</Text>
                </View>
                <TouchableOpacity onPress={()=>this.openDetail(item.CustomerId)} style={styles.button}>
                    <Text style={styles.buttonText}>VIEW DETAIL</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
    _keyExtractor = (item) => item.CustomerId;

    render() {
        return (
            <SafeAreaView style={[containerStyles.greyContainer,styles.container]}>
                <Text style={styles.title}>List of users</Text>
                <FlatList
                    data={UserList.Results}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 70,
        paddingBottom: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 15,
    },
    itemCard: {
        backgroundColor: '#ffffff',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        padding: 12
    },
    name: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5
    },
    subText: {
        fontSize: 16,
        color: '#9a9a9a'
    },
    button: {
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#f68e8d'
    }
});

export default SearchResult;
