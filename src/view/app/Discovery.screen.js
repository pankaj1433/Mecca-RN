import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//custom component.
import {containerStyles} from '../../common/styles';
import SearchBar from '../../components/SearchBar';
import Loader from '../../components/Loader';

class Discovery extends React.Component {

    searchHandler = (searchText) => {
        this.props.navigation.navigate('SearchResult', {searchTerm: searchText} );
    }

    render() {
        return  (
        <SafeAreaView style={containerStyles.container}>
            {/* <Loader loader={loader}/> */}
            <View style={styles.header}>
                <Text style={styles.headerText1}>Search for customers</Text>
                <Text style={styles.headerText2}>- Get Searching</Text>

                <SearchBar searchHandler={this.searchHandler}/>

                {/* <TouchableOpacity style={styles.QRwrapper} >
                    <React.Fragment>
                        <Ionicons 
                            name={'ios-qr-scanner'} 
                            size={18} 
                            color={'#fff'} />
                        <Text style={styles.QRtext}>SCAN PRODUCTS IN STORE</Text>
                    </React.Fragment>
                </TouchableOpacity> */}
            </View>

            <View style={styles.body}>

            </View>

        </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f57163',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 30,
    },
    body: {
        backgroundColor: '#ffffff',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText1: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 15,
    },
    headerText2: {
        color: '#fff',
        fontSize: 20,
    },
    QRwrapper: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    QRtext: {
        marginLeft: 10,
        color: '#ffffff',
        fontSize: 18,
    }
});

export default Discovery;
