import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import {find} from 'lodash';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

//custom component.
import {containerStyles} from '../../common/styles';
import {UserList, UserData} from '../../common/dummyData';

const {height, width} = Dimensions.get('window');

class UserDetail extends React.Component {
    
    state={
        data: {}
    }

    getNameInitials = (fn,ln) => {
        return `${fn[0].toUpperCase()||''}${ln[0].toUpperCase()||''}`
    }

    renderDetailRow = (text, icon, lable) => {
        return (
            <View style={styles.rowContainer}>
                {lable && <Text style={styles.rowLable}>{lable}</Text>}
                <View style={styles.row}>
                    <Ionicons 
                        style={styles.rowIcon}
                        name={icon} 
                        size={20} 
                        color={'#f57163'} />
                    <Text style={styles.subText}>{text}</Text>
                </View>
            </View>
        );
    }
    
    componentDidMount() {
        const id = this.props.navigation.getParam('id', 0);
        let data = find(UserList.Results, {CustomerId:id} );
        data = {...UserData, ...data}
        this.setState({data})
    }

    render() {
        let {data} = this.state;
        let {navigation} = this.props;
        return  (
            <SafeAreaView style={containerStyles.container}>
                <ScrollView bounces={false} style={[containerStyles.container,{backgroundColor: '#fff'}]}>
                    {
                        data && Object.keys(data).length > 0 ?
                        <View style={styles.container}>
                            <View style={styles.head}>
                                <View style={styles.backHeader}>
                                    <TouchableOpacity 
                                        onPress= {()=>navigation.pop()} 
                                        style={styles.backButton}>
                                        <Ionicons 
                                            name={'ios-arrow-back'} 
                                            size={25} 
                                            color={'#fff'} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.profileHeader}>
                                    <Text style={styles.profileText}>
                                        {this.getNameInitials(data.FirstName, data.LastName)}
                                    </Text>
                                </View>
                                <Text style={styles.nameText}>{`${data.FirstName} ${data.LastName}`}</Text>
                            </View>
                            <View style={styles.body}>
                                {this.renderDetailRow(data.Email.toLowerCase(), 'ios-mail')}
                                {this.renderDetailRow(data.Phone, 'ios-call')}
                                {this.renderDetailRow(data.PostCode, 'ios-home')}
                                {this.renderDetailRow(data.BeautyLoopLevel, 'ios-happy', 'Beauty Loop Level')}
                            </View>
                        </View>
                        : null
                    }
                </ScrollView>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        minHeight: height
    },
    head: {
        paddingHorizontal: 15, 
        backgroundColor: '#f57163',
        alignItems: 'center',
    },
    body:{
        padding: 15,
        backgroundColor: '#fff',
        flex: 1
    },
    backHeader: {
        alignSelf: 'flex-start'
    },
    backButton: {
        paddingVertical: 15,
        paddingRight: 30,
        // paddingLeft: 10
    },
    profileHeader: {
        backgroundColor: '#a1a5b1',
        height: width/3.7,
        width: width/3.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width/7.4,
        marginTop: 30,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#fff'
    },
    profileText: {
        fontSize: 35,
        fontWeight: "600",
        color: '#fff'
    },
    nameText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: "600",
        marginBottom: 10,
        marginBottom: 20,
    },
    subText: {
        fontSize: 18,
        color: '#9a9a9a'
    },
    rowContainer: {
        borderColor: '#9a9a9a40',
        borderBottomWidth: 1.5,
        paddingVertical: 15
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowIcon: {
        marginRight: 15
    },
    rowLable: {
        color: '#f57163',
        fontSize: 20,
        marginBottom: 15
    }
});

export default UserDetail;
