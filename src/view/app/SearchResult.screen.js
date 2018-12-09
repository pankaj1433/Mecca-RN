import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

//custom component.
import {containerStyles} from '../../common/styles';
import Loader from '../../components/Loader';

//import actions.
import {getUserList} from '../../actions/users.action';

class SearchResult extends React.Component {

    state = {
        pageSize: 30,
        startIndex: 0
    }

    componentDidMount () {
        this.fetchAPI();
    }
    
    fetchAPI = () => {
        let {pageSize, startIndex} = this.state;
        const searchTerm = this.props.navigation.getParam('searchTerm', '');
        let {getUserList} = this.props;

        getUserList(searchTerm, pageSize, startIndex);
    }

    openDetail = id => {
        this.props.navigation.navigate('UserDetail', {id: id} );
    }

    loadMoreData = () => {
        let {pageSize, startIndex} = this.state;
        this.setState({startIndex: pageSize+startIndex},()=>{
            this.fetchAPI();
        });
    }

    _renderItem = ({item}) => {
        return (
            <View style={styles.itemCard}>
                <View>
                    <Text style={styles.name}>{`${item.FirstName || ''} ${item.LastName || ''}`}</Text>
                    <Text style={[styles.subText,{marginBottom: 5}]}>{`${item.Email || ''}`}</Text>
                    <Text style={styles.subText}>{`${item.ContactNumber|| ''}`}</Text>
                </View>
                <TouchableOpacity onPress={()=>this.openDetail(item.CustomerId)} style={styles.button}>
                    <Text style={styles.buttonText}>VIEW DETAIL</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
    _keyExtractor = (item, index) => `${index}`;

    render() {
        let {userList, loader} = this.props;
        return (
            <SafeAreaView style={[containerStyles.greyContainer,styles.container]}>
                <Loader loader={loader}/>
                <Text style={styles.title}>List of users</Text>
                <FlatList
                    data={userList}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this.loadMoreData}
                    onEndReachedThreshold={0}
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


const mapStateToProps = (state) => ({
    userList: state.users.userList,
    loader: state.users.loader,
})

const mapDispatchToProps = (dispatch) => ({
    getUserList: (searchTerm, pageSize, startIndex) => dispatch(getUserList(searchTerm, pageSize, startIndex)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
