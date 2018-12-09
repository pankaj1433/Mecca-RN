import { combineReducers } from 'redux';

import {users} from './user.reducer';

let rootReducer = combineReducers({
    users: users,
});

export default rootReducer;