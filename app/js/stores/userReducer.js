import initialState from 'stores/initialState'

import {
	USER_SETDATA
} from 'actions/userActions'

var userReducer = function (state = initialState.user, action) {
    //console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        
    	case USER_SETDATA:
            console.log("set data", action.userData)
            return {
            	name: action.userData.name
            };

        default:
            return state;
    }
};

module.exports = userReducer;