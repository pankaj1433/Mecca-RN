import FetchIntercept from '../utils/FetchIntercept'
import API from '../utils/ApiConstants';
import {USERLISTAPIDATA, USERDETAILAPIDATA} from '../common/dummyData';

/**
 * http://localhost:52000/api/v1/contact/search-customer?countryId=1&searchTerm=erin&pageSize=30&startIndex=1
 */
export const getUserList = (searchTerm, pageSize, startIndex) => dispatch => {
        // FetchIntercept(`${API.LIST_OPERATIONS}${operationID}`, { method: 'GET' })
        // .then( res => {
        //     if(response.Success) {
        //             dispatch({ type: 'ADD_LIST' , data : response.ResponseData});
        //         }
        // });
        dispatch({ type: 'SHOW_LOADER'});

        setTimeout(() => {
            console.log(searchTerm, pageSize, startIndex);
            let response = USERLISTAPIDATA;
            if(response.Success) {
                dispatch({ type: 'ADD_LIST' , data : response.ResponseData});
            }
            dispatch({ type: 'HIDE_LOADER'});
        }, 1000);
};

export const getUser = (userID) => dispatch => {
    dispatch({ type: 'SHOW_LOADER'});

    setTimeout(() => {
        let response = USERDETAILAPIDATA;
        console.log('user id',userID);
        if(response.Success) {
            dispatch({ type: 'SET_USER' , data : USERDETAILAPIDATA.ResponseData});
        }
        dispatch({ type: 'HIDE_LOADER'});
    }, 1000);
}

export const unsetUser = () => dispatch => dispatch({ type: 'UNSET_USER'});