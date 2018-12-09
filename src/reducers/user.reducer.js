const configInitialState = {
    userList: [],
    loader: false,
    selectedUser: {}
};

export const users = (state = configInitialState, action) => {
    switch(action.type) {
        case 'ADD_LIST':
            return { ...state, userList:[...state.userList, ...action.data] };

        case 'SHOW_LOADER': 
            return {...state, loader: true};

        case 'HIDE_LOADER': 
            return {...state, loader: false};

        case 'SET_USER': 
            return {...state, selectedUser: {...action.data}};

        case 'UNSET_USER': 
            return {...state, selectedUser: {}};

        default: 
            return state;
    }
};