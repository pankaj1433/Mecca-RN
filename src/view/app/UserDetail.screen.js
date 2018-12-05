import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import {find} from 'lodash';

//custom component.
import {containerStyles} from '../../common/styles';
import {UserList} from '../../common/dummyData';

const {height, width} = Dimensions.get('window');

class UserDetail extends React.Component {
    
    state={
        data: {}
    }
    
    componentDidMount() {
        const id = this.props.navigation.getParam('id', 0);
        let data = find(UserList.Results, {CustomerId:id} );
        this.setState({data})
    }

    render() {
        let {data} = this.state;
        return  (
        <ScrollView style={[containerStyles.whiteContainer, styles.container]}>
            {
                data && Object.keys(data).length > 0 ?
                <View style={styles.wrapper}>
                    <View style={styles.head}>
                        <Image
                            resizeMode={'contain'}
                            style={styles.imageStyle}
                            source={require('../../assets/user.png')}
                            />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.nameText}>{`${data.FirstName.toUpperCase()} ${data.LastName.toUpperCase()}`}</Text>
                        <Text style={[styles.subText,{marginBottom: 5}]}>{`${data.Email}`}</Text>
                        <Text style={styles.subText}>{`${data.Phone}`}</Text>
                    </View>
                </View>
                : null
            }
        </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // paddingTop: 70,
        backgroundColor: '#f8f8f8',
    },
    wrapper: {
        flex:1
    },
    head: {
        paddingHorizontal: 15, 
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    body:{
        padding: 15,
        backgroundColor: '#f8f8f8',
        flex: 1
    },
    nameText: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 10
    },
    subText: {
        fontSize: 20,
        color: '#9a9a9a'
    },
    imageStyle: {
        width: width - 30,
        // height: width - 50,
    }
});

export default UserDetail;
